import Image from "next/image";

export function Stack() {
  const logos = [
    {
      name: "Next.js",
      src: "/logos/nextjs_icon_dark.svg",
      width: 200,
      height: 80,
    },
    {
      name: "Hono",
      src: "/logos/hono.svg",
      width: 200,
      height: 80,
    },
    {
      name: "Drizzle ORM",
      src: "/logos/drizzle-orm_light.svg",
      width: 200,
      height: 80,
    },
    {
      name: "PostgreSQL",
      src: "/logos/postgresql.svg",
      width: 200,
      height: 80,
    },
    {
      name: "Better Auth",
      src: "/logos/better-auth_light.svg",
      width: 200,
      height: 80,
    },
    {
      name: "Bun",
      src: "/logos/bun.svg",
      width: 200,
      height: 80,
    },
  ];

  return (
    <section className="pb-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-xl font-semibold text-center mb-12">Built on top of these technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={logo.width}
                height={logo.height}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
