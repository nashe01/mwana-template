import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import techSegment from "@/assets/tech-segment.jpg";
import paymentSegment from "@/assets/payment-segment.jpg";
import skySegment from "@/assets/sky-segment.jpg";

const CoreSegments = () => {
  const segments = [
    {
      id: "segment-tech",
      title: "MwanaWev Tech",
      description:
        "Innovative technology solutions that transform how communities access and utilize digital tools for growth and development.",
      image: techSegment,
    },
    {
      id: "segment-paywega",
      title: "PayWega",
      description:
        "Financial technology platform enabling seamless, secure transactions and empowering economic participation across all communities.",
      image: paymentSegment,
    },
    {
      id: "segment-skygiants",
      title: "SkyGiants",
      description:
        "Elevating possibilities through advanced systems and infrastructure that connect, protect, and serve communities at scale.",
      image: skySegment,
    },
  ];

  return (
    <section id="segments" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Segments</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three pillars driving innovation and impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {segments.map((segment) => (
            <Card
              key={segment.id}
              id={segment.id}
              className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 group border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {segment.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSegments;
