'use server'

import {cookies} from "next/headers";
import {refreshServer} from "@/services/refresh";
import axios from "axios";

const accessToken = cookies().get('access_token')?.value || ''

export const GET = async (path: string) => {

    console.log("GET", accessToken)
    if (!accessToken) {
        await refreshServer()
    }
    return axios.post(`${process.env.API_BASEURL}/${path}`, {}, {
        headers: {
            'Content-Type': 'application/json',
            Cookie: `access_token=${accessToken}`
        },
        withCredentials: true
    })
}
