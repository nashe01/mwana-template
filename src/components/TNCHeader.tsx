import logo from "@/assets/asset55.png";

const TNCHeader = () => {
  // TODO: Replace this with your actual geolocation JSON string
  // Paste the exact geolocation JSON data here as a string
  const geolocationDataStr = `{
    "placeholder": "PASTE YOUR ACTUAL GEOLOCATION JSON DATA HERE AS A STRING"
  }`;

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
          <a href="#home" className="inline-flex items-center gap-3" aria-label="MwanaWev home">
            <img src={logo} alt="" className="h-10 w-auto" />
            <span className="sr-only">MwanaWev</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#segments" className="hover:text-primary transition-colors">Segments</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default TNCHeader;

