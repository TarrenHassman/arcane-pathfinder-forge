import { ScrollText, Sparkles, Users } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block text-fantasy-gold animate-glow">Codex Anima</span>
          <span className="text-4xl md:text-5xl font-semibold">AI Driven Worlds</span>
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

        {/* Waitlist Form */}
        <div className="mb-8">
          <WaitlistForm />
        </div>

        <p className="text-fantasy-parchment/70 text-sm -bottom-14">
          Be the first to experience the future of tabletop gaming
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
