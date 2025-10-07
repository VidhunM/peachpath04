// Import PNG icons instead of Lucide
import micIcon from "@/assets/icons/Mic.png";
import reportIcon from "@/assets/icons/Clipboard.png";
import userIcon from "@/assets/icons/Businessman.png";
import communityIcon from "@/assets/icons/Social justice.png";
import nextCtaImage from "@/assets/our promise.jpeg";
import { useEffect, useRef, useState } from "react";
import OptimizedImage from "./OptimizedImage";

const NextCtaSection = () => {
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
    <section ref={sectionRef} id="next-cta" className="bg-white overflow-hidden">
      {/* Top Section - Our Promise to Corporates */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
                    {/* Heading */}
          <div className="animate-in slide-in-from-top duration-700 ease-out">
            <h2
              className="mb-4 animate-in slide-in-from-top duration-700 delay-200"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "120%",
                color: "#30404D",
              }}
            >
              What You Get
            </h2>

            <p
              className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-12 lg:mb-16 leading-relaxed animate-in slide-in-from-top duration-700 delay-400"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "28px",
                color: "#4B5563",
              }}
            >
            </p>
          </div>

          {/* Four Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-left">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-start animate-in slide-in-from-left duration-500 delay-500 hover:scale-105 transition-transform duration-300">
              <img src={micIcon} alt="Mic" className="w-10 h-10 mb-4 hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-left mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "22.2px",
                  lineHeight: "29.7px",
                  color: "#00234B",
                }}
              >
                Weekly Podcasts 
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                }}
              >
                Bite-sized episodes on different companies: what they do, how they treat people, and whether they're worth your time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-start animate-in slide-in-from-left duration-500 delay-600 hover:scale-105 transition-transform duration-300">
              <img src={reportIcon} alt="Report" className="w-10 h-10 mb-4 hover:scale-110 transition-transform duration-300" />
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "22.2px",
                  lineHeight: "29.7px",
                  color: "#00234B",
                }}
              >
                Social Media Reports 
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                }}
              >
                Easy-to-read summaries published on LinkedIn and our website for quick reference.
              </p>
            </div>

            
                     {/* Feature 3 */}
              <div className="flex flex-col items-start animate-in slide-in-from-left duration-500 delay-700 hover:scale-105 transition-transform duration-300">
                <img src={userIcon} alt="User" className="w-10 h-10 mb-4 hover:scale-110 transition-transform duration-300" />
              <h3
                className="text-left mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "22.2px",
                  lineHeight: "29.7px",
                  color: "#00234B",
                }}
              >
                Employee Opinions &<br />Ratings 
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                }}
              >
                Real voices that matter, not just HR taglines.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-start animate-in slide-in-from-left duration-500 delay-800 hover:scale-105 transition-transform duration-300">
              <img src={communityIcon} alt="Community" className="w-10 h-10 mb-4 hover:scale-110 transition-transform duration-300" />
              <h3
                className="mb-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "22.2px",
                  lineHeight: "29.7px",
                  color: "#00234B",
                }}
              >
                A Community Resource 
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "#4B5563",
                }}
              >
                A knowledge hub for anyone exploring careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Our Promise */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left side - Text */}
            <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300 ease-out">
              <h2
                className="animate-in text-left slide-in-from-left duration-700 delay-400"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "56px",
                  lineHeight: "120%",
                  color: "#30404D",
                }}
              >
                Our Promise
              </h2>

              <p
                className="animate-in slide-in-from-left duration-700 delay-500"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#4B5563",
                }}
              >
                We built Peachpod with one goal: to empower people with the truth. From understanding how businesses run to knowing how they treat their people — we bring the facts that matter.
              </p>

              
            </div>

            {/* Right side - Image */}
            <div className="rounded-xl overflow-hidden shadow-lg animate-in slide-in-from-right duration-700 delay-500 ease-out hover:shadow-xl transition-all duration-500 hover:scale-105 max-w-md mx-auto">
              <OptimizedImage
                src={nextCtaImage}
                alt="Our Promise"
                className="w-full h-auto object-cover"
                quality={95}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextCtaSection;