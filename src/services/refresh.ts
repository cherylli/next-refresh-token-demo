'use server'
import axios from "axios";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/set-cookies";


export const refreshServer = async () => {
    console.log("--- Refresh Token Server ---")
    const refreshToken = cookies().get('refresh_token')?.value || ''

    // on docker it needs to be http://api:8000/api/v1 instead of http://localhost:8000/api/v1,
    // TODO: update to use env variables
    const refreshResponse = await axios.post(`${process.env.API_BASEURL}/auth/refresh`, {}, {
        headers: {
            'Content-Type': 'application/json',
            Cookie: `refresh_token=${refreshToken}`
        },
        withCredentials: true
    })

    await setCookies(refreshResponse.headers['set-cookie'])

}
