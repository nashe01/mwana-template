import logo from "@/assets/Asset 55.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const TNCHeader = () => {
  // TODO: Replace this with your actual geolocation JSON string
  // Paste the exact geolocation JSON data here as a string
  const geolocationDataStr = `{
    "placeholder": "PASTE YOUR ACTUAL GEOLOCATION JSON DATA HERE AS A STRING"
  }`;

  const segments = [
    { label: "MwanaWev Tech", href: "#segment-tech" },
    { label: "PayWega", href: "#segment-paywega" },
    { label: "SkyGiants", href: "#segment-skygiants" },
  ];

  return (
    <header className="cd-main-header border-primary sticky-language-no-mobile sticky-header border-b bg-white sticky top-0 z-50 w-full">
      <div className="hidden">
        <span 
          className="geolocationdatastr"
          data-geolocationdatastr={geolocationDataStr}
        />
      </div>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="inline-flex items-center" aria-label="MwanaWev home">
            <img src={logo} alt="MwanaWev" className="h-11 w-auto" />
          </a>
          <nav className="hidden md:flex gap-6 items-center justify-center flex-1">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
                Company Segments
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                {segments.map((segment, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <a href={segment.href} className="cursor-pointer">
                      {segment.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="w-[88px]"></div>
        </div>
      </div>
    </header>
  );
};

export default TNCHeader;

