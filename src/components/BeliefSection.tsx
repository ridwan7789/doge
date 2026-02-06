import { useInView } from "@/hooks/useInView";
import beliefLegacy from "@/assets/belief-legacy.jpeg";

const BeliefSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div
            className={`text-center lg:text-left transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Belief Is <br />
              <span className="text-gradient-gold">Passed Forward</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Dogecoin is more than a chart. It's belief, time, and community —
              <span className="text-foreground font-semibold"> passed from one generation to the next.</span>
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              We're not just holding coins. We're holding onto a vision of what
              crypto can be — fun, inclusive, and community-first.
            </p>

            <div className="inline-block">
              <div className="bg-gradient-gold rounded-full px-8 py-4 font-display font-bold text-primary-foreground text-lg shadow-gold">
                🐕 The People's Crypto
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-95" />
              <img
                src={beliefLegacy}
                alt="Belief and Legacy"
                className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto border border-border/50"
              />
              {/* Price overlay badge */}
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-2 z-20">
                <span className="font-display font-bold text-2xl text-gradient-gold">$1.00</span>
                <span className="text-success text-sm ml-2">▲ 1.07%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeliefSection;
