import { Bot, Layers, RefreshCw, MonitorSmartphone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web App Development",
    description:
      "Complete web applications with React and TypeScript — responsive, fast, and built to grow with your business.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Chat interfaces, real-time streaming responses, and AI-powered features wired into your product the right way.",
  },
  {
    icon: RefreshCw,
    title: "Legacy Modernization",
    description:
      "I've migrated 100K+ lines of AngularJS to React in production. I can bring your aging codebase into the modern era without breaking it.",
  },
  {
    icon: Layers,
    title: "UI Systems & Components",
    description:
      "Shared component libraries and design systems that keep large products consistent — adopted by 6 teams at my day job.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I do"
          title="How I can help you"
          description="From a blank page to a production launch — or improving what you already have."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className="glass-card h-full p-8 transition-colors duration-300 hover:border-accent/40">
                <service.icon className="mb-5 h-8 w-8 text-accent-2" />
                <h3 className="font-display mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-400">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
