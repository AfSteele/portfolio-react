'use client';
export default function Hero() {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-left flex items-center flex-1 min-h-0"
      style={{
        backgroundImage: "url('/gradient-hero.png')",
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl px-4 py-8 mx-auto">
        <div className="lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl !text-white">
            Crafting Innovative Solutions Through Code
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white md:text-lg lg:text-xl">
            Welcome to my portfolio! I’m a passionate software developer dedicated to building
            efficient and user-friendly applications.
          </p>

          <div className="flex flex-row sm:flex-col items-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center justify-center px-5 py-3 border border-black text-base font-medium text-center text-black bg-white rounded-lg hover:bg-[#C9C8C7] focus:ring-4 focus:ring-blue-300"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-transparent rounded-lg border border-white hover:bg-[#ffffff] hover:text-black focus:ring-4 focus:ring-blue-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile override */}
      <style jsx>{`
        @media (max-width: 640px) {
          section {
            background-size: 200% auto;
            background-position: left center;
          }
        }
      `}</style>
    </section>
  );
}
