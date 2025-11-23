import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To leverage technology as a catalyst for sustainable development, creating solutions that empower communities and drive lasting positive change.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "A world where technology bridges gaps, creates opportunities, and enables every community to thrive through innovative, accessible solutions.",
    },
    {
      icon: Award,
      title: "Core Values",
      description:
        "Innovation, integrity, and impact guide everything we do. We believe in sustainable solutions, community empowerment, and transparent partnerships.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future through purpose-driven technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-lg bg-primary flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
