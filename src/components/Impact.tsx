import { Users, Globe, TrendingUp, Heart } from "lucide-react";

const Impact = () => {
  const metrics = [
    {
      icon: Users,
      value: "500K+",
      label: "Lives Impacted",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Communities Served",
    },
    {
      icon: TrendingUp,
      value: "150%",
      label: "Year-over-Year Growth",
    },
    {
      icon: Heart,
      value: "$5M+",
      label: "Economic Value Created",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measuring what matters: lives transformed, communities empowered
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                {metric.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
