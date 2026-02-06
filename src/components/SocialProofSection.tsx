import { useInView } from "@/hooks/useInView";
import tweetMyDoge1 from "@/assets/tweet-mydoge-1.jpeg";
import tweetDogeDesigner from "@/assets/tweet-dogedesigner.jpeg";
import tweetHodl from "@/assets/tweet-hodl.jpeg";
import tweetTimeToDoge from "@/assets/tweet-time-to-doge.jpeg";
import tweetKobeissi from "@/assets/tweet-kobeissi.jpeg";
import tweetCeo from "@/assets/tweet-ceo.jpeg";

const tweets = [
  {
    image: tweetMyDoge1,
    link: "https://x.com/MyDoge/status/2017149520409424062",
    alt: "MyDoge tweet - 1 DOGE = 1 DOGE Forever",
  },
  {
    image: tweetDogeDesigner,
    link: "https://x.com/cb_doge/status/2017149632099602891",
    alt: "DogeDesigner tweet - 1 DOGECOIN = 1 DOGECOIN",
  },
  {
    image: tweetHodl,
    link: "https://x.com/MyDoge/status/2014618729519395087",
    alt: "MyDoge tweet - HODL",
  },
  {
    image: tweetTimeToDoge,
    link: "https://x.com/dogeofficialceo/status/2019732473031295451",
    alt: "It's time to Doge!",
  },
  {
    image: tweetKobeissi,
    link: "https://x.com/KobeissiLetter",
    alt: "Kobeissi Letter tweet about SpaceX and Dogecoin",
  },
  {
    image: tweetCeo,
    link: "https://x.com/Investments_CEO/status/2008066259443933532",
    alt: "Crypto analysts predict DOGE to reach $1",
  },
];

const SocialProofSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="community" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient-gold">Community</span> Speaks
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real voices from the Dogecoin community. Real belief. Real movement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tweets.map((tweet, index) => (
            <a
              key={index}
              href={tweet.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-700 hover:scale-105 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? `${index * 50}ms` : "0ms" }}
            >
              <img
                src={tweet.image}
                alt={tweet.alt}
                className="w-full h-auto"
              />
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">View on X</span>
                <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
