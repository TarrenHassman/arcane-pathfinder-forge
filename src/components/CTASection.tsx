import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Crown, Zap, Gift } from "lucide-react";
const CTASection = () => {
  return <section className="py-20 bg-gradient-to-b from-fantasy-brown/90 to-fantasy-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-fantasy-gold/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-fantasy-gold/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-fantasy-gold/25 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-20 h-20 border border-fantasy-gold/30 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-fantasy-parchment mb-6 animate-glow">
            Begin Your Legend Today
          </h2>
          <p className="text-xl text-fantasy-parchment/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Game Masters who have transformed their campaigns with AI-powered storytelling. 
            Your greatest adventures await.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Free Trial Card */}
          <Card className="bg-fantasy-parchment/95 border-2 border-fantasy-gold/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Gift className="w-12 h-12 text-fantasy-sage mx-auto mb-4" />
              <h3 className="font-cinzel text-xl font-semibold text-fantasy-brown mb-3">
                Free Trial
              </h3>
              <p className="text-fantasy-brown-dark mb-4">
                Explore all features for 14 days, no credit card required
              </p>
              <ul className="text-sm text-fantasy-brown-dark space-y-1">
                <li>✓ Generate 25 NPCs</li>
                <li>✓ Create 5 questlines</li>
                <li>✓ Build 1 campaign world</li>
              </ul>
            </CardContent>
          </Card>

          {/* Main CTA Card */}
          <Card className="bg-fantasy-gold/95 border-2 border-fantasy-gold shadow-2xl transform hover:scale-105 transition-all duration-300 md:scale-110">
            <CardContent className="p-8 text-center">
              <Crown className="w-12 h-12 text-fantasy-brown mx-auto mb-4" />
              <h3 className="font-cinzel text-xl font-semibold text-fantasy-brown mb-3">
                Launch Campaign
              </h3>
              <p className="text-fantasy-brown-dark mb-6">
                Start creating your epic adventure right now
              </p>
              <Button size="lg" className="bg-fantasy-brown hover:bg-fantasy-brown-dark text-fantasy-parchment font-cinzel font-semibold px-8 py-3 rounded-full transition-all duration-300 w-full">
                <Zap className="w-5 h-5 mr-2" />
                START FREE TRIAL
              </Button>
            </CardContent>
          </Card>

          {/* Community Card */}
          <Card className="bg-fantasy-parchment/95 border-2 border-fantasy-sage/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Sparkles className="w-12 h-12 text-fantasy-gold mx-auto mb-4" />
              <h3 className="font-cinzel text-xl font-semibold text-fantasy-brown mb-3">
                Join Community
              </h3>
              <p className="text-fantasy-brown-dark mb-4">
                Connect with fellow Game Masters and share epic stories
              </p>
              <ul className="text-sm text-fantasy-brown-dark space-y-1">
                <li>✓ Discord server access</li>
                <li>✓ Monthly GM workshops</li>
                <li>✓ Campaign templates</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-fantasy-gold hover:bg-fantasy-gold-dark text-fantasy-brown font-cinzel font-semibold text-lg px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <Zap className="w-6 h-6 mr-2" />
              START YOUR EPIC CAMPAIGN
            </Button>
            
          </div>
          
          <p className="text-fantasy-parchment/70 text-sm">
            No commitment • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>;
};
export default CTASection;
