import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Briefcase, Clock } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Software Engineer",
      location: "Remote / On-site",
      type: "Full-time",
      description:
        "Lead development of scalable solutions that drive community impact. Build systems that matter.",
    },
    {
      title: "Product Manager",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Shape the future of our products. Work with cross-functional teams to deliver meaningful solutions.",
    },
    {
      title: "Community Engagement Specialist",
      location: "On-site",
      type: "Full-time",
      description:
        "Bridge technology and communities. Help us understand and serve the needs of those we impact.",
    },
    {
      title: "Data Analyst",
      location: "Remote",
      type: "Full-time",
      description:
        "Transform data into insights. Measure and amplify the impact of our initiatives.",
    },
  ];

  return (
    <section id="careers" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F37535]">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your career while building a better future
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {positions.map((position, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:shadow-lg transition-all duration-300 border-border"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#F37535]">
                    {position.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="lg:self-start bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;

