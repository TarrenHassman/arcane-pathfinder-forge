
import { Separator } from "@/components/ui/separator";
import { Crown, Mail, MessageCircle, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fantasy-brown text-fantasy-parchment py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Crown className="w-8 h-8 text-fantasy-gold mr-3" />
              <h3 className="font-cinzel text-xl font-bold">Pathfinder AI</h3>
            </div>
            <p className="text-fantasy-parchment/80 leading-relaxed">
              Empowering Game Masters with AI-driven storytelling tools for unforgettable tabletop adventures.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-fantasy-gold">Product</h4>
            <ul className="space-y-2 text-fantasy-parchment/80">
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-fantasy-gold">Support</h4>
            <ul className="space-y-2 text-fantasy-parchment/80">
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-fantasy-gold transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold mb-4 text-fantasy-gold">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-fantasy-parchment/80 hover:text-fantasy-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-fantasy-parchment/80 hover:text-fantasy-gold transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="text-fantasy-parchment/80 hover:text-fantasy-gold transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-fantasy-parchment/80 hover:text-fantasy-gold transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <p className="text-fantasy-parchment/80 text-sm">
              Join our Discord for GM tips, campaign ideas, and community support.
            </p>
          </div>
        </div>

        <Separator className="bg-fantasy-parchment/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-fantasy-parchment/70">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-fantasy-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fantasy-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-fantasy-gold transition-colors">Cookie Policy</a>
          </div>
          <div>
            <p>&copy; 2024 Pathfinder AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
