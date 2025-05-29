import { Icon } from "@iconify/react";

export default function CoreTechnologies() {
  return (
    <section className="w-full px-6 py-24" style={{ backgroundColor: "#d6e2ee" }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Subheader */}
        <h3 className="text-xs font-semibold uppercase tracking-wide text-black mb-2">
          Skills
        </h3>

        {/* Main Header */}
        <h2 className="text-5xl font-semibold text-black leading-tight mb-4">
          Core Technologies That Drive My <br /> Development
        </h2>

        {/* Description */}
        <p className="text-sm text-black max-w-2xl mb-16 font-light">
          I specialize in creating responsive web applications using modern frameworks. My expertise
          lies in delivering seamless user experiences through innovative solutions.
        </p>

        {/* Technology Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grids-cols-3 gap-12">
          <div className="flex flex-col items-start space-y-4">
            <Icon icon="simple-icons:javascript" className="h-10 w-10" color="#000" />
            <h4 className="text-lg font-semibold text-black leading-snug">
              JavaScript: The Language of the Web
            </h4>
            <p className="text-sm text-black leading-relaxed">
              I harness the power of JavaScript to build dynamic interfaces.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <Icon icon="simple-icons:react" className="h-10 w-10" color="#000" />
            <h4 className="text-lg font-semibold text-black leading-snug">
              React: Building User Interfaces Efficiently
            </h4>
            <p className="text-sm text-black leading-relaxed">
              React enables me to create interactive UIs with ease.
            </p>
          </div>

          <div className="flex flex-col items-start space-y-4">
            <Icon icon="simple-icons:nodedotjs" className="h-10 w-10" color="#000" />
            <h4 className="text-lg font-semibold text-black leading-snug">
              Node.js: Powering Scalable Server-Side Applications
            </h4>
            <p className="text-sm text-black leading-relaxed">
              With Node.js, I develop fast and scalable backend solutions.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16">
          <button className="px-6 py-2 text-sm font-medium text-black bg-white border border-black rounded-lg hover:bg-black hover:text-white transition">
            Learn
          </button>
          <button className="ml-4 text-sm font-medium text-black hover:underline inline-flex items-center gap-1">
            More
            <span className="text-lg">{">"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
