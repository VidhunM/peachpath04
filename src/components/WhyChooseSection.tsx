import whyChooseImage from "@/assets/business-meeting-office 1.png";
import { useEffect, useRef, useState } from "react";

const WhyChooseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="why-choose" className="py-12 sm:py-16 lg:py-20 bg-[#F17A5733] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
          }`}>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <img 
                src={whyChooseImage} 
                alt="Three professionals working together at a table" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <h2 
              className={`text-[50px] font-bold leading-[140%] tracking-[-1%] text-justify text-[#1B1A1A] mb-6 sm:mb-8 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
              }`}
              style={{
                fontFamily: 'Playfair Display',
                fontStyle: 'normal'
              }}
            >
              Why Choose Peachpath?
            </h2>
            
            <ul className="space-y-4 sm:space-y-5">
              {[
                {
                  title: "Professional Reporting, Human Touch -",
                  description: "We understand boardrooms and grassroots alike."
                },
                {
                  title: "Sustainability at the Core -",
                  description: "Projects designed to outlive project timelines."
                },
                {
                  title: "Proven Ground Presence -",
                  description: "From urban clusters to remote villages."
                },
                {
                  title: "End-to-End Partner -",
                  description: "Design → Execution → Measurement → Impact storytelling."
                },
                {
                  title: "Future-Ready -",
                  description: "Smart systems, tech-driven monitoring, and adaptive strategies."
                }
              ].map((item, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 group hover:translate-x-2 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <span className="mt-1 text-gray-800 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F17A57]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] transition-all duration-300 group-hover:text-gray-900"
                    style={{
                      fontFamily: 'Barlow',
                      fontStyle: 'normal'
                    }}
                  >
                    <span 
                      className="font-bold"
                      style={{
                        fontFamily: 'Barlow',
                        fontWeight: '700'
                      }}
                    >
                      {item.title}
                    </span> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;