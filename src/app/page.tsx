import { Header } from "../components/landing/header";
import { Hero } from "../components/landing/hero";
import { Footer } from "../components/landing/footer";
import { Stack } from "../components/landing/stack";

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
