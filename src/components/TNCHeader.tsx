import { useEffect, useState } from "react";
import logo from "@/assets/Asset 55.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const TNCHeader = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If scrolling DOWN → shrink
      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShrink(true);
      }

      // If scrolling UP → expand
      if (currentScroll < lastScrollY) {
        setShrink(false);
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const geolocationDataStr = `{
    "placeholder": "PASTE YOUR ACTUAL GEOLOCATION JSON DATA HERE AS A STRING"
  }`;

  const segments = [
    { label: "MwanaWev Tech", href: "#segment-tech" },
    { label: "PayWega", href: "#segment-paywega" },
    { label: "SkyGiants", href: "#segment-skygiants" },
  ];

  return (
    <header
      className={`
        cd-main-header border-primary sticky-language-no-mobile sticky-header
        border-b bg-white sticky top-0 z-50 w-full
        transition-all duration-300 ease-in-out
        ${shrink ? "py-2" : "py-4"}
      `}
    >
      <div className="hidden">
        <span
          className="geolocationdatastr"
          data-geolocationdatastr={geolocationDataStr}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between transition-all duration-300">

          {/* LOGO */}
          <a href="#home" className="inline-flex items-center" aria-label="MwanaWev home">
            <img
              src={logo}
              alt="MwanaWev"
              className={`transition-all duration-300 ${
                shrink ? "h-8" : "h-11"
              } w-auto`}
            />
          </a>

          {/* NAV */}
          <nav className="hidden md:flex gap-6 items-center justify-center flex-1">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#careers" className="hover:text-primary transition-colors">Careers</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* DROPDOWN */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 transition-all duration-300">
                <Menu className={`transition-all duration-300 ${shrink ? "h-3 w-3" : "h-4 w-4"}`} />
                <span className={`${shrink ? "text-sm" : "text-base"} transition-all duration-300`}>
                  Company Segments
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {segments.map((segment, index) => (
                <DropdownMenuItem key={index} asChild>
                  <a href={segment.href} className="cursor-pointer">
                    {segment.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default TNCHeader;

