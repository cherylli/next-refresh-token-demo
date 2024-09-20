'use server'
import axios from "axios";
import {cookies} from "next/headers";
import {setCookies} from "@/utils/axios";

export const refreshServer = async () => {
    console.log("--- Refresh Token Server ---")
    const refreshToken = cookies().get('refresh_token')?.value || ''

    const refreshResponse =await axios.post(`http://localhost:8000/api/v1/auth/refresh`, {}, {
        headers: {
            'Content-Type': 'application/json',
            Cookie: `refresh_token=${refreshToken}`
        },
        withCredentials: true
    })

    await setCookies(refreshResponse.headers['set-cookie'])

}
