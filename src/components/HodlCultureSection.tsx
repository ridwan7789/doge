import { useInView } from "@/hooks/useInView";
import hodlDoge from "@/assets/hodl-doge.jpeg";

const HodlCultureSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-card relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl scale-95" />
              <img
                src={hodlDoge}
                alt="HODL Doge"
                className="rounded-3xl shadow-2xl relative z-10 w-full max-w-md mx-auto border border-border/50"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 text-center lg:text-left transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              HODL Is Not a Meme.
              <br />
              <span className="text-gradient-gold">It's a Culture.</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Dogecoin survived because its community never left. Through every dip,
              through every doubt — <span className="text-foreground font-semibold">the holders stayed.</span>
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Doge $1 stands with holders. We believe in the long game,
              the community, and the culture that made Dogecoin legendary.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-secondary rounded-full px-6 py-3 font-display font-semibold">
                💎 Diamond Hands
              </div>
              <div className="bg-secondary rounded-full px-6 py-3 font-display font-semibold">
                🐕 1 DOGE = 1 DOGE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HodlCultureSection;
