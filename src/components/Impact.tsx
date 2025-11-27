import { TrendingUp, MapPin, Users, Award, LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useRef, useEffect } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: MapPin,
    value: 50000,
    suffix: "+",
    label: "Potential Users",
    description: "Across Africa",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Communities Engaged",
    description: "Local partnerships across Africa",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Cash Dependency Rate",
    description: "Reduction in cash dependency",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "International Awards",
    description: "Recognition for technology innovation",
  },
];

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
  description: string;
  index: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, description, index }: StatItemProps) => {
  const { value: countValue, start } = useCountUp(value, 4000);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [start]);

  return (
    <FadeIn direction="scale" delay={index * 100}>
      <div ref={ref} className="text-center group">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#51682C] hover:bg-[#3d5020] rounded-full mb-4 transition-colors">
          <Icon className="h-8 w-8 text-foreground" />
        </div>

        {/* Smaller number font size */}
        <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {countValue.toLocaleString()}
          {suffix}
        </div>

        <div className="text-xl font-semibold text-foreground mb-2">
          {label}
        </div>

        <p className="text-sm text-foreground">
          {description}
        </p>
      </div>
    </FadeIn>
  );
};

export const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#DB6B2E] mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results driving conservation success across Africa
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
