import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import talentFactoryImg from "@/assets/medium-shot-smiley-women-working-together.jpg";
import rpoImg from "@/assets/job-interview-candidate-selection-employment.jpg";
import hrAdvisoryImg from "@/assets/smiling-young-businesswoman-showing-contract-partner.jpg";
import contractStaffingImg from "@/assets/Rectangle 4.png";
import permanentRecruitmentImg from "@/assets/bussiness-people-working-team-office 1.png";
import payrollComplianceImg from "@/assets/high-angle-payroll-concept 2.png";

const services = [
  {
    id: 1,
    title: "Talent Factory (Hire, Train & Deploy)",
    description:
      "We close your skill gaps through a focused model: we source fresh talent, train them as per your needs, and deploy them into roles immediately.",
    image: talentFactoryImg,
  },
  {
    id: 2,
    title: "Recruitment Process Outsourcing (RPO)",
    description:
      "Let us own your hiring function — fully or partially. From demand planning to onboarding, we manage the recruitment lifecycle with precision, compliance, and scale.",
    image: rpoImg,
  },
  {
    id: 3,
    title: "HR Advisory & Transformation",
    description:
      "We help you transform the way HR works in your organization — from structure to systems, talent strategy to compliance. Whether you're scaling or restructuring, we align your people practices with your strategic goals.",
    image: hrAdvisoryImg,
  },
  {
    id: 4,
    title: "Contract Staffing",
    description:
      "Need talent on the go? Our contract staffing model lets you scale up (or down) quickly without the overhead of permanent hires. We manage everything — from sourcing and onboarding to payroll — so you get fully compliant, job-ready professionals exactly when you need them.",
    image: contractStaffingImg,
  },
  {
    id: 5,
    title: "Permanent Recruitment & Executive Search",
    description:
      "Finding the right fit for key roles is critical — and time-consuming. We help you build high-performing teams by sourcing, assessing, and placing candidates who not only meet your skill needs but also align with your culture.",
    image: permanentRecruitmentImg,
  },
  {
    id: 6,
    title: "Payroll & Statutory Compliance",
    description:
      "Stay compliant. Stay confident. We manage payroll and labor law compliance end-to-end — so you don't have to worry about penalties, audits, or delays.",
    image: payrollComplianceImg,
  },
];

const HumanCapitalSection = () => {
  const [isVisible, setIsVisible] = useState(true); // Always visible in popup
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the breakpoint for desktop
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle card expansion
  const toggleCard = (cardId: number) => {
    if (isMobile) return; // Don't allow expansion on mobile
    
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  // Truncate text for desktop view
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Get display text based on view and expansion state
  const getDisplayText = (cardId: number, description: string) => {
    if (isMobile) {
      return description; // Full text on mobile
    }
    
    if (expandedCards.has(cardId)) {
      return description; // Full text when expanded
    }
    
    return truncateText(description); // Truncated text when collapsed
  };

  return (
    <div className="bg-white overflow-hidden h-full">
      <style>
        {`
          .scrollable-text::-webkit-scrollbar {
            display: none;
          }
          .swiper-button-prev,
          .swiper-button-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button-prev {
            left: 10px;
          }
          .swiper-button-next {
            right: 10px;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-family: swiper-icons;
            font-size: 20px;
            font-weight: bold;
          }
          .swiper-button-prev:after {
            content: 'prev';
          }
          .swiper-button-next:after {
            content: 'next';
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center pt-2 pb-6 sm:pb-8">
        {/* Heading */}
        <div className="opacity-100 translate-y-0">
          <p
            className="max-w-3xl mx-auto mb-6 sm:mb-8 opacity-100 translate-y-0 text-sm sm:text-base md:text-lg lg:text-lg"
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              lineHeight: "140%",
              color: "#30404D",
            }}
          >
            We offer a powerful suite of human capital solutions designed to
            support your business at every stage — from acquiring the right
            talent to driving workforce transformation.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={false}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              }
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              320: { 
                slidesPerView: 1, 
                spaceBetween: 16,
                centeredSlides: true
              },
              475: { 
                slidesPerView: 1, 
                spaceBetween: 18,
                centeredSlides: true
              },
              640: { 
                slidesPerView: 1, 
                spaceBetween: 20,
                centeredSlides: false
              },
              768: { 
                slidesPerView: 2, 
                spaceBetween: 20,
                centeredSlides: false
              },
              1024: { 
                slidesPerView: 3, 
                spaceBetween: 20,
                centeredSlides: false
              },
            }}
            className="pb-8"
          >
            {services.map((s, index) => (
              <SwiperSlide key={s.id}>
                <div
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white text-left h-full flex flex-col opacity-100 translate-y-0 scale-100"
                  style={{ 
                    minHeight: isMobile ? "auto" : "500px",
                    height: isMobile ? "auto" : "500px"
                  }}
                >
                  {/* Image */}
                  <div 
                    className={`w-full overflow-hidden group relative ${
                      isMobile ? "aspect-[4/3] sm:aspect-[16/9]" : "h-64"
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-4 sm:p-6 lg:p-7 flex-1 flex flex-col relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10 text-left flex-1 flex flex-col">
                      <h3
                        className="font-semibold leading-relaxed tracking-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-lg sm:text-xl md:text-lg lg:text-xl xl:text-xl mb-3 text-left"
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontWeight: 700,
                          lineHeight: "107%",
                          color: "#FFFFFF",
                        }}
                      >
                        {s.title}
                      </h3>
                                             <div 
                         className={`${!isMobile ? 'overflow-y-auto flex-1 scrollable-text' : 'flex-1 flex flex-col'}`}
                         style={{ 
                           maxHeight: !isMobile ? "120px" : "auto"
                         }}
                       >
                         <p
                           className="opacity-90 leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-sm sm:text-base lg:text-lg"
                           style={{
                             fontFamily: "Barlow, sans-serif",
                             fontWeight: 400,
                             lineHeight: "140%",
                             color: "#FFFFFF",
                           }}
                         >
                           {s.description}
                         </p>
                       </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation arrows */}
          <div className="swiper-button-prev flex after:text-[#F17A57] after:text-xl lg:after:text-2xl after:font-bold bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 lg:w-12 lg:h-12 items-center justify-center border border-[#F17A57]/20 hover:border-[#F17A57] transition-all duration-200"></div>
          <div className="swiper-button-next flex after:text-[#F17A57] after:text-xl lg:after:text-2xl after:font-bold bg-white/90 hover:bg-white shadow-lg rounded-full w-10 h-10 lg:w-12 lg:h-12 items-center justify-center border border-[#F17A57]/20 hover:border-[#F17A57] transition-all duration-200"></div>
        </div>
      </div>
    </div>
  );
};

export default HumanCapitalSection;
