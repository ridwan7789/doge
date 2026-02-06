import { useEffect, useState } from "react";

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <a 
        href="https://x.com/Dogeondollar"
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full bg-gradient-gold text-primary-foreground py-4 rounded-full font-display font-bold text-center shadow-gold"
      >
        Join the Movement
      </a>
    </div>
  );
};

export default MobileStickyCTA;
