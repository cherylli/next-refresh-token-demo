import axios from "axios";
import {cookies} from "next/headers";

const accessToken = cookies().get('access_token')?.value || ''

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    withCredentials: true,
    headers: {
        Cookie: `access_token=${accessToken}`
    }
})
