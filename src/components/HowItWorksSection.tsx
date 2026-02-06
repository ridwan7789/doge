import { useInView } from "@/hooks/useInView";
import { Users, Gift, Coins, Heart } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Community Participates",
    description: "Join the movement and become part of the Doge $1 mission.",
  },
  {
    icon: Gift,
    title: "Creator Rewards Collected",
    description: "Community contributions and creator rewards are pooled together.",
  },
  {
    icon: Coins,
    title: "Rewards Used to Buy DOGE",
    description: "Collected rewards are converted to Dogecoin transparently.",
  },
  {
    icon: Heart,
    title: "Distributed to Supporters",
    description: "DOGE distributed back to Doge $1 community members.",
  },
];

const HowItWorksSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="how" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How the <span className="text-gradient-gold">System</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Transparent, honest, simple. Here's how we support the Dogecoin community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div
                className={`glass-card rounded-2xl p-6 text-center hover-glow relative z-10 h-full transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-gold-sm">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-sm font-display font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
