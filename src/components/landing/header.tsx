import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
	return (
		<header className="w-full flex justify-center px-8 md:px-16 py-6">
			<div className="w-full max-w-5xl flex justify-between items-center">
				<div className="flex items-center gap-2">
					<Image
						src="/next.svg"
						alt="Next.js logo"
						width={120}
						height={30}
						priority
					/>
				</div>

				<Button variant="outline" asChild>
					<Link href="/sign-in">Try signing in</Link>
				</Button>
			</div>
		</header>
	);
}
