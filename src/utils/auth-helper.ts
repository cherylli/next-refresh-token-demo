'use server'

import {signIn, signOut} from "@/auth";

export const signInSA = async (redirect: string = '/') => {
    await signIn('credential', {redirectTo: redirect})
}

export const signOutSA = async () => {
    await signOut()
}
