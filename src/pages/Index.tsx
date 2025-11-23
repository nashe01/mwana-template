import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreSegments from "@/components/CoreSegments";
import Newsletter from "@/components/Newsletter";
import Careers from "@/components/Careers";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <CoreSegments />
      <Newsletter />
      <Careers />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
