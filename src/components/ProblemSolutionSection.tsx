import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, Clock, Users, BookOpen, Map } from "lucide-react";
const ProblemSolutionSection = () => {
  const problems = [{
    icon: Clock,
    title: "Hours of Prep Time",
    description: "Spend entire evenings creating NPCs, plotlines, and world details"
  }, {
    icon: Users,
    title: "Inconsistent NPCs",
    description: "Struggle to maintain character voices and motivations across sessions"
  }, {
    icon: BookOpen,
    title: "Writer's Block",
    description: "Run out of creative ideas for quests, encounters, and story hooks"
  }];
  const solutions = [{
    icon: CheckCircle,
    title: "Instant World Building",
    description: "Generate rich NPCs, locations, and quests in seconds with AI"
  }, {
    icon: CheckCircle,
    title: "Consistent Characters",
    description: "AI agents remember every detail and maintain perfect character consistency"
  }, {
    icon: CheckCircle,
    title: "Endless Creativity",
    description: "Never run out of ideas with AI-powered story generation and suggestions"
  }];
  return;
};
export default ProblemSolutionSection;