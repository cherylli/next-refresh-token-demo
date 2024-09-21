'use server'
import axios from "axios";
import {cookies} from "next/headers";
import {refreshServer} from "@/services/refresh";


// baseURL handles both baseURLs in both frontend and backend (both docker and non docker)
const axiosInstance = axios.create({
    baseURL: process.env.API_BASEURL || process.env.NEXT_PUBLIC_API_BASEURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use( async (config)=> {
    console.log("request interceptor")
    const accessToken = cookies().get('access_token')?.value || ''
    if(!accessToken) {
        await refreshServer()
        const newAccessToken = cookies().get('access_token')?.value || ''
        config.headers.Cookie = `access_token=${newAccessToken}`
    } else {
        config.headers.Cookie = `access_token=${accessToken}`
    }
    return config
}, (error)=> {
    return Promise.reject(error)
} )

export default axiosInstance

