'use server'
import axios from "axios";
import {cookies} from "next/headers";
import {parse} from "cookie";

const accessToken = cookies().get('access_token')?.value || ''
const refreshToken = cookies().get('refresh_token')?.value || ''

const axiosInstance = axios.create({
    baseURL: process.env.API_BASEURL || process.env.NEXT_PUBLIC_API_BASEURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${accessToken}; refresh_token=${refreshToken}`,
    }
})

export const setCookies = async (authCookies: string[] | undefined) => {
    'use server'
    console.log("--- Setting Cookies (Server)---")
    console.log(`setCookies`, authCookies)
    if (authCookies && authCookies.length > 0) {
        authCookies.forEach(cookie => {
            const parsedCookie = parse(cookie)
            const [cookieName, cookieValue] = Object.entries(parsedCookie)[0]


            cookies().set({
                name: cookieName,
                value: cookieValue,
                httpOnly: true,
                maxAge: parseInt(parsedCookie["Max-Age"]),
                path: parsedCookie.path,
                sameSite: 'none',
                expires: new Date(parsedCookie.expires),
                secure: true,
            })
        })
    }

    console.log('authCookies: ', authCookies)
}

export default axiosInstance

