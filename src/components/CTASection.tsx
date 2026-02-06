import dogeLogo from "@/assets/doge-logo.png";

const CTASection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full scale-150 animate-pulse-glow" />
              <img 
                src={dogeLogo} 
                alt="Doge $1 Logo" 
                className="w-32 h-32 rounded-full relative z-10 shadow-gold mx-auto"
              />
            </div>
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-gradient-gold">Doge $1</span> Movement
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Be part of history. Join thousands of believers supporting Dogecoin's journey to $1.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://x.com/Dogeondollar"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-10 py-5 rounded-full font-display font-bold text-xl hover:opacity-90 transition-all shadow-gold hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Join on X
            </a>
            <a 
              href="https://x.com/Dogeondollar"
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-10 py-5 rounded-full font-display font-bold text-xl hover:bg-primary/10 transition-all hover:scale-105"
            >
              View Community Posts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
