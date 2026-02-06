import dogeLogo from "@/assets/doge-logo.png";
import Particles from "./Particles";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <Particles />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Logo with glow */}
        <div className="mb-8 animate-scale-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full scale-150 animate-pulse-glow" />
            <img 
              src={dogeLogo} 
              alt="Doge $1 Logo" 
              className="w-40 h-40 md:w-56 md:h-56 rounded-full relative z-10 shadow-gold"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-in">
          <span className="text-gradient-gold">DOGE</span>
          <span className="text-foreground"> $1</span>
        </h1>

        {/* Subheadline */}
        <p className="font-display text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Not a Dream. <span className="text-foreground font-semibold">A Mission.</span>
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
          A community-driven movement supporting Dogecoin's journey toward $1.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <a 
            href="https://x.com/Dogeondollar"
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-display font-bold text-lg hover:opacity-90 transition-all shadow-gold hover:scale-105"
          >
            Join the Community
          </a>
          <a 
            href="#what"
            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-display font-bold text-lg hover:bg-primary/10 transition-all hover:scale-105"
          >
            See the Mission
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
