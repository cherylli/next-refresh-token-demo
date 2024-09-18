'use client'

import {useSession} from "next-auth/react";
import {signInSA, signOutSA} from "@/utils/auth-helper";

const AuthButton = () => {
    const session = useSession()
    return session.data?.user ? (
        <button onClick={ async()=>{
            await signOutSA()
            await signInSA()
        }}>
            Sign Out
        </button>
    ):(
        <button onClick={async () => {
            await signInSA()
        }}>
            Sign In
        </button>
    )
 }

 export default AuthButton
