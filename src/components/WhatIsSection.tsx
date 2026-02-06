import { useInView } from "@/hooks/useInView";

const WhatIsSection = () => {
  const { ref, isInView } = useInView();

  const cards = [
    { icon: "🤝", title: "Unity", desc: "Community first. Always." },
    { icon: "💎", title: "Holding Culture", desc: "Diamond hands together." },
    { icon: "🎁", title: "Rewards", desc: "Supporting the holders." },
  ];

  return (
    <section id="what" className="py-24 bg-card relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient-gold">Doge $1</span>?
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Doge $1 is a <span className="text-foreground font-semibold">belief-based movement</span>.
            We don't promise price. We support Dogecoin through unity, holding culture, and community rewards.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 hover-glow transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">{card.icon}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            className={`mt-12 p-4 border border-border/50 rounded-xl bg-background/50 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
          >
            <p className="text-sm text-muted-foreground italic">
              ⚠️ This is not financial advice. This is a community experiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
