import impactImage from "@/assets/business-person-looking-finance-graphs 1.jpeg";
import OptimizedImage from "./OptimizedImage";

const ImpactEchoesSection = () => {
  return (
    <section id="impact-echoes" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-700 ease-out">
            <h2 
              className="text-3xl sm:text-4xl md:text-[55px] text-center md:text-left font-bold tracking-[0px] text-[#30404D] animate-in slide-in-from-left duration-700 delay-200 leading-[120%] md:leading-tight"
              style={{
                fontFamily: 'Playfair Display',
                fontStyle: 'normal'
              }}
            >
              Let's Create{" "}
              <span>
                Impact That Echoes
              </span>
            </h2>
            
            <p 
              className="text-base sm:text-lg md:text-[20px] text-center md:text-left leading-[140%] tracking-[0px] text-[#30404D] animate-in slide-in-from-left duration-700 delay-400"
              style={{
                fontFamily: 'Barlow',
                fontStyle: 'normal'
              }}
            >
              Your CSR story deserves more than numbers in an annual report. It deserves to be a story communities tell for generations. At Peachpath Services, we're ready to walk that journey with you — with empathy, expertise, and excellence.
            </p>
            
            
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-in slide-in-from-right duration-700 delay-300 ease-out">
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
              <OptimizedImage 
                src={impactImage} 
                alt="Three professionals collaborating at a desk with laptop" 
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                quality={100}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactEchoesSection;
