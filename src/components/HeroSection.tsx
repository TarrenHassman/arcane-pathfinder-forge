import { useIsMobile } from "@/hooks/use-mobile";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://pftpziyewdkrwxffwgyi.supabase.co/storage/v1/object/public/boltbadge//pathfinder-hero.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-fantasy-gold rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-fantasy-sage rounded-full animate-float opacity-80"
          style={{
            animationDelay: "1s",
          }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-fantasy-gold rounded-full animate-float opacity-50"
          style={{
            animationDelay: "2s",
          }}
        ></div>
      </div>

      {/* Content */}
      <HeroContent />

      {/* Scroll Indicator */}
      {!isMobile && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fantasy-parchment/50 rounded-full p-1">
            <div className="w-1 h-3 bg-fantasy-parchment/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};
export default HeroSection;
