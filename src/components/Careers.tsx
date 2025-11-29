import { Button } from "@/components/ui/button";
import heroImg from "@/assets/careers-hero.jpeg"; // Replace with your actual image

const CareersHero = () => {
  return (
    <section className="w-full bg-gray-100 py-20"> {/* Light Gray BG */}

      {/* NEW TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F37535]">
          Join Our Team
        </h2>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-gray-600 tracking-wide">
            CAREERS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Shape the future  
            <br />
            of commerce,  
            <br />wherever you are
          </h1>

          <p className="text-lg text-gray-600 max-w-md">
            We are rewriting the rules of the modern economy.  
            If you believe in the power of innovation and love solving problems at scale,  
            we’d love to have you join our team.
          </p>

          {/* BUTTON → Goes to Job Search Page */}
          <Button
            size="lg"
            className="bg-[#0C8A3E] hover:bg-[#0C8A3E]/90 text-white rounded-full px-8 py-6 text-lg"
            onClick={() => (window.location.href = "/careers/jobs")}
          >
            Search jobs
          </Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src={heroImg}
            alt="Careers"
            className="rounded-xl shadow-md w-full object-cover h-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
