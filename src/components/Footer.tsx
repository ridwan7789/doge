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
              <a
                href="https://t.me/Doge_onedollar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Join Telegram"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.318-1.386 3.998-1.620 4.437-1.635z"/>
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

          {/* Contract Address */}
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-foreground mb-2">DOGE$1 CA:</p>
            <p className="text-xs font-mono bg-muted px-3 py-2 rounded-md max-w-md mx-auto break-words">
              Fgb17HDGqXa9ojTjmgLmqsnjymYs7h9uJ27pCp7Cpump
            </p>
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
