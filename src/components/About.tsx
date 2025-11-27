import { Target, Eye, Award, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutPerson1 from "@/assets/about-person-1.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutPerson2 from "@/assets/about-person-2.jpg";
import aboutPerson3 from "@/assets/about-person-3.jpg";

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

  const highlights = [
    "Committed to community empowerment",
    "Transparent, ethical operations",
    "Sustainable & scalable solutions",
    "Trusted by regional partners",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F37535]">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future through purpose-driven technology
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div className="relative">
            <img
              src={aboutPerson1}
              alt="Community member"
              className="w-28 h-28 object-cover rounded-lg shadow-lg absolute top-4 left-4 z-10"
            />
            <img
              src={aboutTeam}
              alt="Middle left"
              className="w-28 h-28 object-cover rounded-lg shadow-lg absolute top-1/2 -translate-y-1/2 left-4 z-10"
            />
            <img
              src={aboutPerson3}
              alt="Overlay bottom left"
              className="w-28 h-28 object-cover rounded-lg shadow-lg absolute bottom-4 left-4 z-10"
            />

            <div className="relative flex justify-center">
              <img
                src={aboutPerson2}
                alt="Professional team member"
                className="w-[50%] h-96 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              MwanaWev is a purpose-driven organization dedicated to building
              sustainable solutions for communities across Africa. With decades
              of combined experience, we connect innovation, environmental care,
              and community impact to create lasting value. Our work spans
              multiple sectors — all unified by a mission to empower people,
              protect nature, and shape a better future.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
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

              <h3 className="text-2xl font-bold mb-4 text-[#F37535]">
                {value.title}
              </h3>

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

