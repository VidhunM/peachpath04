import { Button } from "@/components/ui/button";
import { Mail, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ContactSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
  isModal?: boolean;
}

const ContactSection = ({ isOpen = false, onClose, isModal = false }: ContactSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (isModal) {
      setIsVisible(true);
      return;
    }

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
  }, [isModal]);

  // Close modal when Escape key is pressed
  useEffect(() => {
    if (!isModal || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModal, isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModal && isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (isModal) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModal, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === "phone") {
      // Only allow digits and limit to 10 characters
      const phoneValue = value.replace(/\D/g, '').slice(0, 10);
      
      setFormData(prev => ({
        ...prev,
        [name]: phoneValue
      }));
      
      // Clear phone error when user starts typing
      if (phoneError) {
        setPhoneError("");
      }
      
      // Validate phone number length
      if (phoneValue.length > 0 && phoneValue.length !== 10) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    } else if (name === "name") {
      // Only allow alphabets, spaces, and common name characters (hyphens, apostrophes)
      const nameValue = value.replace(/[^a-zA-Z\s\-']/g, '');
      
      setFormData(prev => ({
        ...prev,
        [name]: nameValue
      }));
      
      // Clear name error when user starts typing
      if (nameError) {
        setNameError("");
      }
      
      // Validate name contains only alphabets
      if (nameValue.length > 0 && !/^[a-zA-Z\s\-']+$/.test(nameValue)) {
        setNameError("Name can only contain letters, spaces, hyphens, and apostrophes");
      } else {
        setNameError("");
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate name before submission
    if (!/^[a-zA-Z\s\-']+$/.test(formData.name.trim())) {
      setNameError("Name can only contain letters, spaces, hyphens, and apostrophes");
      return;
    }
    
    // Validate phone number before submission
    if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyg308nR6PSFboUofcJULATFgWMC7aZGcJPTIB7AlIM6Sowu11mGImhtOOWqxg1-u_a/exec';

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitStatus("success");
      setPhoneError("");
      setNameError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });

      // Close modal after success if it's a modal
      if (isModal) {
        setTimeout(() => {
          onClose?.();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        // Keep success message visible briefly without reloading the page
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 3000);
      }
    } catch (error) {
      console.error('Error!', error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isModal && onClose) {
      onClose();
      setSubmitStatus("idle");
      setPhoneError("");
      setNameError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }
  };

  // If it's a modal and not open, don't render
  if (isModal && !isOpen) {
    return null;
  }

  // Modal overlay and content
  if (isModal) {
    return (
      <>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300"
          onClick={handleClose}
        />
        
        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Playfair Display" }}>
                Contact Us
              </h2>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {[
                  { type: "text", name: "name", placeholder: "Name *", required: true },
                  { type: "email", name: "email", placeholder: "Email *", required: true },
                  { type: "tel", name: "phone", placeholder: "Phone Number *", required: true },
                  { type: "text", name: "company", placeholder: "Company Name", required: false }
                ].map((field, index) => (
                  <div key={index}>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 ${
                        (field.name === "phone" && phoneError) || (field.name === "name" && nameError)
                          ? "border-red-500 focus:ring-red-500 hover:border-red-400" 
                          : "border-gray-300 hover:border-orange-300"
                      }`}
                    />
                    {field.name === "phone" && phoneError && (
                      <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                    )}
                    {field.name === "name" && nameError && (
                      <p className="mt-1 text-xs text-red-500">{nameError}</p>
                    )}
                  </div>
                ))}

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-300 hover:border-orange-300"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F17A57] hover:bg-[#F17A57]/90 text-white font-medium rounded-lg py-3 text-base transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Regular contact section (unchanged)
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white min-h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left info */}
          <div className={`lg:col-span-1 flex flex-col justify-center space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2
                className={`font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[100%] tracking-[0px] text-black text-left transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                }`}
                style={{ fontFamily: "Playfair Display" }}
              >
                Contact us
              </h2>

              <div className={`space-y-3 sm:space-y-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}>
                <div className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300 group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:text-[#F17A57]" />
                  <span className="text-gray-900 text-sm sm:text-base md:text-lg transition-all duration-300 group-hover:text-[#30404D]">
                    contact@mypeachpath.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className={`lg:col-span-1 transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              {[
                { type: "text", name: "name", placeholder: "Name *", required: true },
                { type: "email", name: "email", placeholder: "Email *", required: true },
                { type: "tel", name: "phone", placeholder: "Phone Number *", required: true },
                { type: "text", name: "company", placeholder: "Company Name", required: false }
              ].map((field, index) => (
                <div key={index}>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.required}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    className={`w-full rounded-lg border bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-500 hover:shadow-md focus:shadow-lg transform hover:-translate-y-1 ${
                      (field.name === "phone" && phoneError) || (field.name === "name" && nameError)
                        ? "border-red-500 focus:ring-red-500 hover:border-red-400" 
                        : "border-gray-300 hover:border-orange-300"
                    } ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  />
                  {field.name === "phone" && phoneError && (
                    <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                  )}
                  {field.name === "name" && nameError && (
                    <p className="mt-1 text-xs text-red-500">{nameError}</p>
                  )}
                </div>
              ))}

              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full rounded-lg border border-gray-300 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all duration-500 hover:border-orange-300 hover:shadow-md focus:shadow-lg transform hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '900ms' }}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full text-white font-medium rounded-lg py-2.5 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                style={{ 
                  backgroundColor: "#FD7E1E",
                  transitionDelay: '1000ms'
                }}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      Submit
                    </span>
                   
                  </>
                )}
              </Button>

              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 text-green-700 rounded-lg mt-4">
                  Thank you! Your message has been sent successfully. 
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 text-red-700 rounded-lg mt-4">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;