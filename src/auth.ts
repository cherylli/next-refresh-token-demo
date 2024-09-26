import NextAuth, {CredentialsSignin, NextAuthConfig} from "next-auth"
import Credentials from "@auth/core/providers/credentials";
import axios, {AxiosError} from "axios";
import {setCookies} from "@/utils/set-cookies";


const credentialsConfig = Credentials({
    credentials: {
        email: {},
        password: {},
    },
    async authorize(credentials) {
        try {
            const authResponse = await axios.post(
                `${process.env.API_BASEURL}/auth/login`, {
                    "email": credentials.email,
                    "password": credentials.password
                })

            const authCookies = authResponse.headers['set-cookie']
            await setCookies(authCookies)

            const userRes = await axios.get(
                `${process.env.API_BASEURL}/users/me`,
                {
                    headers: {
                        cookie: authCookies
                    },
                    withCredentials: true
                },
            )
            if (userRes.status !== 200) {
                // TODO maybe find a better error to throw
                throw new Error("Auth - cannot fetch user detail")
            }

            return {
                id: userRes.data.id,
                name: `${userRes.data.firstName} ${userRes.data.lastName}`,
                email: userRes.data.email,
                roles: userRes.data.roles,
            }

        } catch (e) {
            if (e instanceof AxiosError) {
                if (e.response?.data.statusCode === 401) {
                    throw new CredentialsSignin("Invalid email or password")
                }
            }
            throw new CredentialsSignin("Sign in error.")
        }
    }
})

const callbacks = {

}

const authOptions: NextAuthConfig = {
    session: {
        strategy: 'jwt'
    },
    providers: [credentialsConfig],
    callbacks,
    secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig


export const {handlers, auth, signIn, signOut} = NextAuth(authOptions)
