import {parse} from "cookie";
import {cookies} from "next/headers";

export const setCookies = async (authCookies: string[] | undefined) => {
    'use server'
    console.log("--- Setting Cookies (Server)---")
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
}
