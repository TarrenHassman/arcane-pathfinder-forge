
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock, Users, BookOpen, Map } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Hours of Prep Time",
      description: "Spend entire evenings creating NPCs, plotlines, and world details"
    },
    {
      icon: Users,
      title: "Inconsistent NPCs",
      description: "Struggle to maintain character voices and motivations across sessions"
    },
    {
      icon: BookOpen,
      title: "Writer's Block",
      description: "Run out of creative ideas for quests, encounters, and story hooks"
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: "Instant World Building",
      description: "Generate rich NPCs, locations, and quests in seconds with AI"
    },
    {
      icon: CheckCircle,
      title: "Consistent Characters",
      description: "AI agents remember every detail and maintain perfect character consistency"
    },
    {
      icon: CheckCircle,
      title: "Endless Creativity",
      description: "Never run out of ideas with AI-powered story generation and suggestions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-fantasy-parchment to-fantasy-parchment-dark parchment-texture">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-fantasy-brown mb-6">
            From GM Burnout to Epic Adventures
          </h2>
          <p className="text-xl text-fantasy-brown-dark max-w-3xl mx-auto leading-relaxed">
            We understand the challenges every Game Master faces. Let AI handle the heavy lifting 
            while you focus on what matters most: creating unforgettable stories.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="font-cinzel text-2xl font-semibold text-fantasy-brown mb-4 flex items-center justify-center lg:justify-start">
                <AlertTriangle className="w-7 h-7 text-red-600 mr-3" />
                The GM Struggle
              </h3>
            </div>
            
            {problems.map((problem, index) => (
              <Card key={index} className="bg-white/50 border-fantasy-brown/20 shadow-lg scroll-shadow animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <problem.icon className="w-8 h-8 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cinzel text-lg font-semibold text-fantasy-brown mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-fantasy-brown-dark leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <div className="text-center lg:text-left mb-8">
              <h3 className="font-cinzel text-2xl font-semibold text-fantasy-brown mb-4 flex items-center justify-center lg:justify-start">
                <Map className="w-7 h-7 text-fantasy-sage mr-3" />
                The Pathfinder Solution
              </h3>
            </div>
            
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-fantasy-sage/10 border-fantasy-sage/30 shadow-lg scroll-shadow animate-fade-in" style={{animationDelay: `${(index + 3) * 0.2}s`}}>
                <CardContent className="p-6 flex items-start space-x-4">
                  <solution.icon className="w-8 h-8 text-fantasy-sage mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-cinzel text-lg font-semibold text-fantasy-brown mb-2">
                      {solution.title}
                    </h4>
                    <p className="text-fantasy-brown-dark leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
