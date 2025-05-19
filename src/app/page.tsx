import { Button } from "@/components/ui/button";
import { Header } from "./component/landing/header";
import { Hero } from "./component/landing/hero";
import { Footer } from "./component/landing/footer";
import { Stack } from "./component/landing/stack";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Stack />
      <Footer />
    </div>
  );
}
