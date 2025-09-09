"use client";

import { createAuthClient } from "better-auth/react";

const { useSession } = createAuthClient();

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
	const {
		data: session,
		isPending, //loading state
		error, //error object
	} = useSession();

	if (isPending) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	if (!session) {
		redirect("/sign-in");
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<h1 className="text-2xl font-semibold">Dashboard</h1>
				<p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
					This is a protected route.
				</p>
				<p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
					Your name is: {session?.user?.name}
				</p>
				<Button
					onClick={() =>
						authClient.signOut({
							fetchOptions: {
								onSuccess: () => {
									redirect("/"); // redirect to login page
								},
							},
						})
					}
				>
					Sign out
				</Button>
			</main>
		</div>
	);
}
