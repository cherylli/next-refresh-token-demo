'use server'

import {cookies} from "next/headers";
import {refreshServer} from "@/services/refresh";
import axios from "axios";



export const getRequest = async (path: string) => {
    console.log("--- GET Request ---")
    let accessToken = cookies().get('access_token')?.value || ''

    if (!accessToken) {
        await refreshServer()
    }
    accessToken = cookies().get('access_token')?.value || ''

    const res = await axios.get(`${process.env.API_BASEURL}/${path}`, {
        headers: {
            Cookie: `access_token=${accessToken}`
        },
        withCredentials: true
    })
    return res.data
}
