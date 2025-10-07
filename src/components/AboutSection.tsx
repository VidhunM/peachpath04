import op1 from "@/assets/op1.jpg";
import op2 from "@/assets/op2.jpg";
import op3 from "@/assets/op3.jpg";
import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const cardData = [
  {
    id: 1,
    title: "Identify Your Need\nand Highlight Priority",
    subtitle: "At Peachpath, we:",
    description: "We uncover the real goals hiding behind the request.",
    image: op1,
  },
  {
    id: 2,
    title: "Design Smart\nSolutions",
    subtitle: "At Peachpath, we:",
    description:
      "Innovative, practical strategies tailored for measurable results.",
    image: op2,
  },
  {
    id: 3,
    title: "Deliver Beyond\nExpectations",
    subtitle: "At Peachpath, we:",
    description: "Feel to See, measure, and celebrate.",
    image: op3,
  },
];

const ApproachSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards with staggered delay
            setTimeout(() => {
              setAnimatedCards([1, 2, 3]);
            }, 500);
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
    <section
      ref={sectionRef}
      id="about"
      className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-4 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#F17A57] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F17A57] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F17A57] rounded-full blur-2xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#30404D] mb-3 sm:mb-4 transition-all duration-1000 ease-out delay-200 ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-8 scale-95"
              }`}
          >
            About Us
          </h2>

        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              className={`space-y-4 sm:space-y-5 lg:space-y-4 pt-4 sm:pt-6 lg:pt-0 flex-1 flex flex-col justify-center transition-all duration-1000 ease-out delay-500 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                }`}
            >
              <div className={`font-playfair text-left font-bold text-[#0B1F3B] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-none antialiased transition-all duration-1000 ease-out delay-400 -mt-18 sm:-mt-18 md:-mt-20 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                }`}>
                What Makes Us Unique?
              </div>
              <p className={`text-base sm:text-lg md:text-xl lg:text-[22px] font-barlow font-normal text-[#8B8C8C] leading-relaxed sm:leading-[28px] lg:leading-[31px] text-justify antialiased transition-all duration-700 ease-out delay-600 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                }`}>
                At Peachpath, we strike the perfect balance between wisdom and
                innovation. Our team blends industry veterans with decades of
                experience and next-gen thinkers who bring fresh ideas and
                digital fluency.
              </p>
              <p className={`text-base sm:text-lg md:text-xl lg:text-[22px] font-barlow font-normal text-[#8B8C8C] leading-relaxed sm:leading-[28px] lg:leading-[31px] text-justify antialiased transition-all duration-700 ease-out delay-700 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                }`}>
                This synergy lets us craft human-centered solutions that reflect
                each organization's unique culture, goals, and vision for the
                future.
              </p>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 pb-8 sm:pb-10 lg:pb-12">
              {cardData.map((card, index) => (
                <div
                  key={card.id}
                  className={`about-card bg-white rounded-t-xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-700 ease-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${animatedCards.includes(card.id)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-12 scale-95"
                    }`}
                  style={{
                    transitionDelay: `${800 + index * 200}ms`,
                    animationDelay: `${800 + index * 200}ms`
                  }}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden group relative">
                    <OptimizedImage
                      src={card.image}
                      alt={card.title.replace(/\n/g, " ")}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      quality={90}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Coral text box */}
                  <div className="bg-[#F17A57] text-white px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-6 flex-1 flex flex-col justify-center transition-all duration-500 hover:bg-[#F17A57]/90">
                    <div className="space-y-2 sm:space-y-3">
                      <p className={`text-xs sm:text-sm text-left font-inter font-normal opacity-95 transition-all duration-500 delay-100 ${animatedCards.includes(card.id)
                          ? "opacity-95 translate-x-0"
                          : "opacity-0 translate-x-4"
                        }`}>
                        {card.subtitle}
                      </p>
                      <h3 className={`text-base sm:text-lg lg:text-xl text-left font-playfair font-bold leading-tight whitespace-pre-line transition-all duration-500 delay-200 ${animatedCards.includes(card.id)
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                        }`}>
                        {card.title}
                      </h3>
                      <p className={`text-xs sm:text-sm text-left font-inter font-normal opacity-95 leading-relaxed transition-all duration-500 delay-300 ${animatedCards.includes(card.id)
                          ? "opacity-95 translate-x-0"
                          : "opacity-0 translate-x-4"
                        }`}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
