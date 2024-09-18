'use server'

import {signIn, signOut} from "@/auth";

export const signInSA = async () => {
    await signIn()
}

export const signOutSA = async () => {
    await signOut()
}
