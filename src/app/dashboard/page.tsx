"use client"

import { createAuthClient } from "better-auth/react"
const { useSession } = createAuthClient() 
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export default function Dashboard() {
    const {
        data: session,
        isPending, //loading state
        error, //error object 
    } = useSession()

    if (isPending) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!session) {
        redirect("/sign-in")
    }

    return <div>
        <h1>Dashboard. This is a protected route.</h1>
        <p>Your name is: {session?.user?.name}</p>
        <Button onClick={() => authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                redirect("/"); // redirect to login page
                },
            },       
        })}>
            Sign out
        </Button>
    </div>;
}