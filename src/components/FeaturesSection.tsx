import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, ScrollText, Map, Calendar, BookOpen } from "lucide-react";
import WaitlistForm from "./WaitlistForm"
const FeaturesSection = () => {
  const features = [
    {
      icon: ScrollText,
      title: "Detailed Character Sheets",
      description: "Create rich, detailed characters with comprehensive stat blocks, appearance details, and ability scores. Generate Portraits and Voices using AI, use voice modulation for NPCs",
      color: "fantasy-gold",
      image: "/lovable-uploads/1ed634db-78de-4fa8-a3f0-6ee41a97ab0b.png"
    },
    {
      icon: Brain,
      title: "NPC Agents",
      description: "Allow NPCs to progress their goals off screen while you GM for the players, letting plots unfold in the background.",
      color: "fantasy-sage",
      image: "/lovable-uploads/b8fc3391-9e58-450a-9ee1-d40bca71dde9.png"
    },
    {
      icon: Map,
      title: "Interactive World Maps",
      description: "Build stunning fantasy worlds with multi-layered maps featuring different zoom levels. Create detailed regions, continents, and local areas with interconnected locations and environmental storytelling.",
      color: "fantasy-brown",
      image: "/lovable-uploads/1fe820e8-0855-4bf8-b047-3539dc5bdd8f.png"
    },
    {
      icon: Calendar,
      title: "Session Management",
      description: "Host friendly or paid Sessions, easily list availability and find Sessions that match your time",
      color: "fantasy-gold",
      image: "/lovable-uploads/0fa484c8-9ccb-42d3-a9e9-07cfd43613ca.png"
    },
    {
      icon: BookOpen,
      title: "Lore Management",
      description: "Organize your world's history across ages and eras with an intuitive timeline system. Track civilizations, events, and cultural developments to maintain consistent world-building.",
      color: "fantasy-sage",
      image: "/lovable-uploads/8aad9547-b72a-40cf-8516-0174e4208ebf.png"
    },
    {
      icon: Users,
      title: "Player Collaboration",
      description: "Invite players to contribute to world-building, share character backstories, and access relevant information. Characters should feel like the truly lived in the world",
      color: "fantasy-brown",
      image: "/lovable-uploads/tempPlayerCollab.png"
    }
  ];

  return (
    <div className="relative py-20 min-h-lvh flex items-center overflow-hidden">
      {/* Background Image for Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" 
        style={{ backgroundImage: `url('https://pftpziyewdkrwxffwgyi.supabase.co/storage/v1/object/public/boltbadge//image2.png')` }}
      >
        <div className="absolute inset-0 bg-fantasy-parchment/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-fantasy-brown-dark mb-6">
            Forge Legendary Campaigns
          </h2>
          <p className="text-xl text-fantasy-brown-dark max-w-3xl mx-auto leading-relaxed">
            Harness the power of AI to create immersive worlds, compelling characters, 
            and unforgettable adventures that will keep your players coming back for more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-white/80 border-2 border-fantasy-${feature.color}/30 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 scroll-shadow animate-fade-in`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`w-16 h-16 bg-fantasy-${feature.color}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className={`w-8 h-8 text-fantasy-${feature.color}`} />
                </div>
                <CardTitle className="font-cinzel text-xl font-semibold text-fantasy-brown-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-fantasy-brown-dark leading-relaxed text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
    <div className="mt-16">
          <WaitlistForm />
        </div>
        {/* Feature Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-fantasy-gold/10 border-2 border-fantasy-gold/30 rounded-2xl p-8 max-w-4xl mx-auto scroll-shadow">
            <h3 className="font-cinzel text-2xl font-semibold text-fantasy-brown-dark mb-4">
              ✨ Coming Soon: Real-time AI Dungeon Master
            </h3>
            <p className="text-fantasy-brown-dark text-lg leading-relaxed">
              Experience the future of tabletop gaming with an AI that can run entire sessions, 
              react to player choices in real-time, and create emergent storylines that surprise even you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
