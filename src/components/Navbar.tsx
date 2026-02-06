import dogeLogo from "@/assets/doge-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src={dogeLogo} 
            alt="Doge $1 Logo" 
            className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display font-bold text-xl">
            <span className="text-gradient-gold">DOGE</span>
            <span className="text-foreground"> $1</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#what" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            What is Doge $1
          </a>
          <a href="#how" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How it Works
          </a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Community
          </a>
        </div>

        <a 
          href="https://x.com/Dogeondollar"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-full font-display font-semibold text-sm hover:opacity-90 transition-opacity shadow-gold-sm hover:shadow-gold"
        >
          Join X
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
