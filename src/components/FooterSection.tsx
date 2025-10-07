import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/icons/Instagram.png";
import linkedinIcon from "@/assets/icons/Group 73.png";

const Footer = () => {
  return (
    <footer className="bg-[#FBF2EF]">
      {/* ✅ Desktop View */}
      <div className="hidden md:block pt-6 md:pt-8 lg:pt-10 pb-4 md:pb-6 lg:pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two-halves layout */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Half: Logo + Icons */}
            <div className="flex flex-col items-left mt-1 sm:mt-3 md:mt-4 lg:mt-6 pl-1 md:pl-2 animate-in slide-in-from-left duration-700 ease-out">
              <div className="flex items-center gap-2 sm:gap-3 mb-0 sm:mb-0 md:mb-0">
                <img
                  src={logo}
                  alt="Peachpath"
                  className="h-8 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Social Icons under Logo */}
              <div className="flex items-center justify-left gap-1.5 sm:gap-3 md:gap-6 ml-0 sm:ml-2 md:ml-40">
                <a
                  href="https://www.instagram.com/mypeachpath/?hl=en"
                  aria-label="Instagram"
                  className="hover:opacity-80 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/mypeachpath/"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                  />
                </a>
              </div>
            </div>

            {/* Right Half: Three columns of text */}
            <div className="text-left animate-in slide-in-from-right duration-700 delay-300 ease-out">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {/* Quick Links */}
                <div className="text-left animate-in slide-in-from-right duration-500 delay-400">
                  <h4 className="text-sm md:text-base font-semibold text-[#1B1A1A] mb-3 md:mb-4 text-left tracking-tight leading-tight">
                    Quick Links
                  </h4>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#1B1A1A] text-left tracking-tight leading-tight">
                    <li>
                      <a href="#" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        Our services
                      </a>
                    </li>
                    <li>
                      <a href="#peachpath" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        #Peachpath
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Service */}
                <div className="text-left animate-in slide-in-from-right duration-500 delay-500">
                  <h4 className="text-sm md:text-base font-semibold text-[#1B1A1A] mb-3 md:mb-4 text-left tracking-tight leading-tight">
                    Service
                  </h4>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#1B1A1A] text-left tracking-tight leading-tight">
                    <li>
                      <a href="#" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        Network
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-80 block hover:translate-x-1 transition-transform duration-300">
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contacts */}
                <div className="text-left animate-in slide-in-from-right duration-500 delay-600">
                  <h4 className="text-sm md:text-base font-semibold text-[#1B1A1A] mb-3 md:mb-4 text-left tracking-tight leading-tight">
                    Contact us
                  </h4>
                  <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-[#1B1A1A] text-left tracking-tight leading-tight">
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <Mail size={16} className="mt-0.5 flex-shrink-0" />
                      <span className="tracking-tight leading-tight">contact@mypeachpath.com</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                      <span className="tracking-tight leading-tight">
                        No. 6/13, 3rd street, Ulaganathapuram, Ennore, Chennai - 600057
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 lg:mt-10 border-t border-[#E4D8D3] pt-4 md:pt-6 text-sm md:text-base text-[#1B1A1A] text-center md:text-right animate-in slide-in-from-bottom duration-500 delay-700 tracking-tight leading-tight">
            All Rights Reserved
          </div>
        </div>
      </div>

      {/* ✅ Mobile View */}
      <div className="block md:hidden pt-4 pb-2">
        <div className="container mx-auto px-3">
          {/* Logo + Social */}
          <div className="flex flex-col items-start mb-4 animate-in slide-in-from-left duration-700">
            <img
              src={logo}
              alt="Peachpath"
              className="h-8 sm:h-16 w-auto mb-0.5 hover:scale-105 transition-transform duration-300"
            />
            <div className="flex gap-3 ml-2">
              <a
                href="https://www.instagram.com/mypeachpath/?hl=en"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-300"
              >
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/peachpath/about/?viewAsMember=true"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:scale-110 transition-all duration-300"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-6 animate-in slide-in-from-right duration-700 delay-300">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-[#1B1A1A] mb-2">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-[#1B1A1A]">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Our services</a></li>
                <li><a href="#peachpath">#Peachpath</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Service */}
            <div>
              <h4 className="text-sm font-semibold text-[#1B1A1A] mb-2">
                Service
              </h4>
              <ul className="space-y-2 text-sm text-[#1B1A1A]">
                <li><a href="#">Network</a></li>
                <li><a href="#">Jobs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-[#1B1A1A] mb-2">
                Contact us
              </h4>
              <ul className="space-y-2 text-sm text-[#1B1A1A]">
                <li className="flex gap-2">
                  <Mail size={14} /> contact@mypeachpath.com
                </li>
                <li className="flex gap-2">
                  <MapPin size={14} /> No. 6/13, 3rd street, Ulaganathapuram,
                  Ennore, Chennai - 600057
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 border-t border-[#E4D8D3] pt-2 text-sm text-[#1B1A1A] text-center">
            All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
