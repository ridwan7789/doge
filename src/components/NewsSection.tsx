import { useInView } from "@/hooks/useInView";
import { ExternalLink, TrendingUp, FileText } from "lucide-react";

const NewsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            News & <span className="text-gradient-gold">Analysis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            What the analysts and experts are saying about Dogecoin's future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Article */}
          <a
            href="https://bitcoinworld.co.in/dogecoin-price-prediction-2026-2030-dollar-6/"
            target="_blank"
            rel="noopener noreferrer"
            className={`block glass-card rounded-2xl p-8 hover-glow transition-all duration-700 hover:scale-[1.02] group mb-8 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center flex-shrink-0 shadow-gold-sm">
                <FileText className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
                    ANALYSIS
                  </span>
                  <span className="text-xs text-muted-foreground">BitcoinWorld</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Dogecoin Price Prediction 2026-2030: Path to $1 and Beyond
                </h3>
                <p className="text-muted-foreground mb-4">
                  Multiple analysts predict strong catalysts including ETF legitimacy,
                  mass adoption, and growing institutional interest could drive DOGE to $1.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  Read Full Article
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>

          {/* Key Points */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "ETF Legitimacy", desc: "Institutional recognition growing" },
              { title: "Mass Adoption", desc: "Payment integrations expanding" },
              { title: "Long-term Vision", desc: "Community-driven growth" },
            ].map((item, index) => (
              <div
                key={index}
                className={`glass-card rounded-2xl p-6 text-center transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
              >
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
