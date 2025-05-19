import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl">The starter pack</h1>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
            I hate setting up new projects. You have an idea.
          </p>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
            You ended up spending 3 hours doing auth, AGAIN and again.
          </p>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
            I don't want to do that any more.
          </p>
          <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] tracking-[-.01em] max-w-prose mx-auto sm:mx-0">
            I use: Nextjs, Hono, Postgres, Drizzle, Better Auth, Bun
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button 
            variant="default" 
            size="lg"
            asChild
          >
            <a href="/sign-in" rel="noopener noreferrer">
              Try signing in
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a
              href="https://github.com/uanandaraja/next-starterpack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star our repo
            </a>
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Button variant="link" asChild className="p-0 h-auto">
          <a
            className="flex items-center gap-2"
            href="https://x.com/nizzyhussle"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nizzyhussle
          </a>
        </Button>
        
      </footer>
    </div>
  );
}
