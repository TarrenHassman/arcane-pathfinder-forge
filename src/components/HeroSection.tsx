import { Button } from "@/components/ui/button";
import { ScrollText, Sparkles, Users, Zap } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://pftpziyewdkrwxffwgyi.supabase.co/storage/v1/object/public/boltbadge//pathfinder-hero.png')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-fantasy-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-fantasy-sage rounded-full animate-float opacity-80" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-fantasy-gold rounded-full animate-float opacity-50" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block text-fantasy-gold animate-glow">Codex Anima</span>
            <span className="text-4xl md:text-5xl font-semibold">AI WORLD BUILDER</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-fantasy-parchment mb-8 font-crimson leading-relaxed">
            Dynamic storytelling and gameplay from NPC AI agents
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-fantasy-gold/30">
              <Users className="w-5 h-5 text-fantasy-gold mr-2" />
              <span className="text-fantasy-parchment">AI NPCs</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-fantasy-gold/30">
              <ScrollText className="w-5 h-5 text-fantasy-gold mr-2" />
              <span className="text-fantasy-parchment">Dynamic Quests</span>
            </div>
            <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-fantasy-gold/30">
              <Sparkles className="w-5 h-5 text-fantasy-gold mr-2" />
              <span className="text-fantasy-parchment">World Generation</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-fantasy-gold hover:bg-fantasy-gold-dark text-fantasy-brown font-cinzel font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <Zap className="w-5 h-5 mr-2" />
              LAUNCH YOUR CAMPAIGN
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-fantasy-parchment text-fantasy-parchment hover:bg-fantasy-parchment hover:text-fantasy-brown font-cinzel font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm">
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-fantasy-parchment/80 text-sm">
            <p>Trusted by 10,000+ Game Masters worldwide</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fantasy-parchment/50 rounded-full p-1">
            <div className="w-1 h-3 bg-fantasy-parchment/50 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
