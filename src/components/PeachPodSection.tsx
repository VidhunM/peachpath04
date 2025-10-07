import peachPodImage from "@/assets/close-up-people-working-together 1.jpeg";

const PeachPodSection = () => {
  return (
    <section id="peachpod" className="min-h-screen overflow-hidden">
      {/* Top Section - White Background */}
      <div className="bg-white pt-2 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-in slide-in-from-top duration-700 ease-out">
            <h2 
              className="text-[64px] font-bold leading-[120%] tracking-[0px] text-center text-[#30404D] mb-6 sm:mb-8"
              style={{
                fontFamily: 'Playfair Display',
                fontStyle: 'normal'
              }}
            >
              Listen. Learn. Choose{" "}
              <span className="block mt-2">
                Smarter Path.
              </span>
            </h2>
            <p 
              className="text-[20px] leading-[140%] tracking-[0px] text-center text-[#30404D] max-w-5xl mx-auto"
              style={{
                fontFamily: 'Barlow',
                fontStyle: 'normal'
              }}
            >
              Job hunting can be overwhelming — polished career pages, fancy videos, and big promises everywhere. But what's the real story inside a company? That's where Peachpod comes in. We publish straightforward, no-fluff podcasts about companies — covering their business, culture, employee experiences, and what it's really like to work there. Honest opinions. Real ratings. Candid insights.
              So before you send that application or accept that offer, you'll know exactly what you're walking into.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Light Peach Background */}
      <div className="bg-[#F17A5733] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-4 sm:space-y-6 animate-in slide-in-from-left duration-700 delay-300 ease-out">
              <h3 
                className="text-[50px] font-bold leading-[140%] tracking-[-1%] text-left text-[#1B1A1A] animate-in slide-in-from-left duration-700 delay-400"
                style={{
                  fontFamily: 'Playfair Display',
                  fontStyle: 'normal'
                }}
              >
                Why Peachpod?
              </h3>
              
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3 animate-in slide-in-from-left duration-500 delay-500">
                  <span className="mt-1 text-[#1B1A1A] flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] flex-1"
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
                      Know Every Business -
                    </span> Our bigger goal? To make the business of every company clear and accessible to everyone – not just the insiders.
                  </p>
                </li>
                
                <li className="flex items-start gap-3 animate-in slide-in-from-left duration-500 delay-600">
                  <span className="mt-1 text-[#1B1A1A] flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] flex-1"
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
                      Unfiltered Insights -
                    </span> Not marketing spin. Just real talk about companies, from business strategy to workplace culture.
                    </p>
                </li>
                
                <li className="flex items-start gap-3 animate-in slide-in-from-left duration-500 delay-700">
                  <span className="mt-1 text-[#1B1A1A] flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] flex-1"
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
                      Trusted & Reliable -
                    </span> Our research is thorough, our opinions honest, and our updates consistent.
                    </p>
                </li>
                
                <li className="flex items-start gap-3 animate-in slide-in-from-left duration-500 delay-800">
                  <span className="mt-1 text-[#1B1A1A] flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] flex-1"
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
                      For Students & Job Seekers -
                    </span> Whether you're choosing your first job or your next big move, we help you make informed decisions.
                    </p>
                </li>
                
                <li className="flex items-start gap-3 animate-in slide-in-from-left duration-500 delay-900">
                  <span className="mt-1 text-[#1B1A1A] flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" fill="none" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p 
                    className="text-[16px] leading-[140%] tracking-[0px] text-[#1B1A1A] flex-1"
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
                      Completely Free -
                    </span> Weekly podcasts + reports shared openly on LinkedIn, X, and more.
                    </p>
                </li>
              </ul>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-in slide-in-from-right duration-700 delay-500 ease-out">
              <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                <img 
                  src={peachPodImage} 
                  alt="Four professionals collaborating around a table with laptop and documents" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeachPodSection;
