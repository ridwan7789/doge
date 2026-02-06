import dogeLogo from "@/assets/doge-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src={dogeLogo} 
                alt="Doge $1 Logo" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <span className="font-display font-bold text-lg">
                  <span className="text-gradient-gold">DOGE</span> $1
                </span>
                <p className="text-xs text-muted-foreground">Community-Driven Meme Movement</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://x.com/Dogeondollar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Follow on X"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#what" className="text-muted-foreground hover:text-foreground transition-colors">
              What is Doge $1
            </a>
            <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a 
              href="https://bitcoinworld.co.in/dogecoin-price-prediction-2026-2030-dollar-6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              News
            </a>
          </div>

          {/* Disclaimer */}
          <div className="text-center border-t border-border/50 pt-8">
            <p className="text-xs text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              ⚠️ <span className="font-semibold">Important Disclaimer:</span> Doge $1 is not affiliated with Dogecoin Core, the Dogecoin Foundation, or any official Dogecoin entities. 
              This is a community movement and meme culture project. No guarantees. No promises. Not financial advice. 
              Cryptocurrency investments carry significant risk.
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Doge $1 Community. Meme culture only. 🐕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
