'use client'

import {refreshServer} from "@/services/refresh";
import axios from "axios";
import {getRequest, getRequestWithInterceptor} from "@/services/requests";
import {usePathname} from "next/navigation";
import {signInSA} from "@/utils/auth-helper";

export default function RedirectPage() {

    const pathname = usePathname()

    const handleRefreshServer = async () => {
        await refreshServer()
    }

    const handleRefreshClient = async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_BASEURL}/auth/refresh`, {}, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        }).catch(e => {
            if (axios.isAxiosError(e)) {
                if(e.response?.status ===401) {
                    // refresh token expired
                    signInSA(pathname)
                }
            }
            throw e
        })
    }

    const getMeServer = async () => {
        const me = await getRequest('users/me')
        console.log(me)
    }

    const getMeInterceptor = async () => {
        const me = await getRequestWithInterceptor('users/me')
        console.log(me)
    }

    return (
        <main>
            <br/>
            <h1> --- Redirect Page ---</h1>
            <br/>
            <button onClick={handleRefreshServer}>Refresh (Server)</button>
            <br/>
            <button onClick={handleRefreshClient}>Refresh (Client)</button>
            <br/>
            <br/>
            <button onClick={getMeServer}>Get (Server)</button>
            <br/>
            <button onClick={getMeInterceptor}>Get (Interceptor)</button>
            <br/>
        </main>
    );
}
