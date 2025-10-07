import Icon from "@/assets/icons/Icon.png";
import Report from "@/assets/icons/Report.png";
import Eye from "@/assets/icons/Eye.png";
import SocialJustice from "@/assets/icons/Social justice.png";

const OurPromiseSection = () => {
  return (
    <section id="our-promise" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Area */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 animate-in slide-in-from-top duration-700 ease-out">
          <h2 
            className="text-[40px] font-bold leading-[120%] tracking-[0px] text-center text-[#30404D] mb-4 sm:mb-6 animate-in slide-in-from-top duration-700 delay-200"
            style={{
              fontFamily: 'Playfair Display',
              fontStyle: 'normal'
            }}
          >
            Our Promise to Corporates
          </h2>
          <p 
            className="text-[20px] leading-[140%] tracking-[0px] text-center text-[#30404D] animate-in slide-in-from-top duration-700 delay-400"
            style={{
              fontFamily: 'Barlow',
              fontStyle: 'normal'
            }}
          >
            When you partner with Peachpath Services, you don't just tick off compliance. You:
          </p>
        </div>

        {/* Four Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Block 1 - Padlock Icon */}
          <div className="text-left animate-in slide-in-from-bottom duration-700 delay-300 ease-out">
            <div className="mb-3 sm:mb-4 flex justify-start">
              <img 
                src={Icon} 
                alt="Icon" 
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] mb-2 sm:mb-3 text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              Unlock purpose with precision 
            </h3>
            <p 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '300',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              Every rupee creates visible change.
            </p>
          </div>

          {/* Block 2 - Clipboard/Document Icon */}
          <div className="text-left animate-in slide-in-from-bottom duration-700 delay-400 ease-out">
            <div className="mb-3 sm:mb-4 flex justify-start">
              <img 
                src={Report} 
                alt="Report" 
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] mb-2 sm:mb-3 text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              Gain peace of mind 
            </h3>
            <p 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '300',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              We take care of governance, compliance, and reporting.
            </p>
          </div>

          {/* Block 3 - Eye Icon */}
          <div className="text-left animate-in slide-in-from-bottom duration-700 delay-500 ease-out">
            <div className="mb-3 sm:mb-4 flex justify-start">
              <img 
                src={Eye} 
                alt="Eye" 
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] mb-2 sm:mb-3 text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              See your vision come alive 
            </h3>
            <p 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '300',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              From classrooms to livelihoods, from health camps to skill labs.
            </p>
          </div>

          {/* Block 4 - Two Hands Icon */}
          <div className="text-left animate-in slide-in-from-bottom duration-700 delay-600 ease-out">
            <div className="mb-3 sm:mb-4 flex justify-start">
              <img 
                src={SocialJustice} 
                alt="Social Justice" 
                className="w-12 h-12 sm:w-16 sm:h-16 hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] mb-2 sm:mb-3 text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '600',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              Build a legacy
            </h3>
            <p 
              className="text-[22.2px] leading-[29.7px] tracking-[0px] text-[#00234B] text-left"
              style={{
                fontFamily: 'Inter',
                fontWeight: '300',
                fontStyle: 'normal',
                verticalAlign: 'middle'
              }}
            >
              Not just CSR projects, but community movements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromiseSection;