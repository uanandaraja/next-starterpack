import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-6 text-center text-gray-600">
      <Button variant="link" asChild className="p-0 h-auto text-gray-600 hover:text-gray-900">
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
  )
}
