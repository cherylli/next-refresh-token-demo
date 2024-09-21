'use server'
import axios from "axios";
import {cookies} from "next/headers";

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

export default axiosInstance

