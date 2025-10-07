import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/Home video.mp4";
import { useEffect, useRef, useState } from "react";
import ContactSection from "./ContactSection";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  // Try to autoplay with sound when visible; fall back to muted autoplay if blocked
  useEffect(() => {
    const tryAutoplayWithSound = async () => {
      if (!isVisible || !videoRef.current) return;
      const videoEl = videoRef.current;
      try {
        videoEl.muted = false;
        setIsMuted(false);
        await videoEl.play();
        setIsPlaying(true);
      } catch {
        // Autoplay with audio blocked by browser; fall back to muted autoplay
        videoEl.muted = true;
        setIsMuted(true);
        try {
          await videoEl.play();
          setIsPlaying(true);
        } catch {
          // Even muted autoplay failed; do nothing, wait for user interaction
        }
      }
    };

    tryAutoplayWithSound();
  }, [isVisible]);

  // Also attempt immediately on mount (in case hero is above the fold)
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    (async () => {
      try {
        videoEl.muted = false;
        setIsMuted(false);
        await videoEl.play();
        setIsPlaying(true);
      } catch {
        try {
          videoEl.muted = true;
          setIsMuted(true);
          await videoEl.play();
          setIsPlaying(true);
        } catch {
          // ignore
        }
      }
    })();
  }, []);

  // On first user interaction with video, try to enable audio playback
  useEffect(() => {
    const handler = async (event: Event) => {
      // Only trigger on video-related elements, not on other page elements
      const target = event.target as HTMLElement;
      const isVideoElement = target.closest('.hero-video-container') || 
                            target.closest('video') || 
                            target.classList.contains('hero-video-mute-btn') ||
                            target.classList.contains('hero-video-playpause-btn');
      
      if (!isVideoElement) return;
      
      const videoEl = videoRef.current;
      if (!videoEl) return;
      try {
        videoEl.muted = false;
        setIsMuted(false);
        await videoEl.play();
        setIsPlaying(true);
      } catch {
        // ignore
      }
    };
    // Use pointerdown for earliest gesture, and once ensures auto-cleanup
    window.addEventListener('pointerdown', handler, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handler as EventListener);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const openContact = () => {
    setIsContactOpen(true);
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      <section ref={sectionRef} className="bg-[#F17A574D] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center py-6 sm:py-8 md:py-12 lg:py-6">
            {/* Left Content */}
            <div className={`space-y-4 sm:space-y-5 lg:space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                <div className={`space-y-2 sm:space-y-3 transition-all duration-1000 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#30404D] leading-tight">
                    Seasoned Expertise.
                  </h1>
                  <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#30404D] leading-tight">
                    Gen Z Edge.
                  </h1>
                  <h1 className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#30404D] leading-tight">
                    Real Results.
                  </h1>
                </div>
                
                <p className={`font-barlow text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-normal text-[#30404D] max-w-lg transition-all duration-1000 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}>
                  Together with you, we redefine talent - uniting seasoned 
                  insight with next-gen creativity to fuel innovation, 
                  accelerate growth, and shape a future-ready workforce.
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                <Button 
                  size="lg" 
                  onClick={openContact}
                  className="group bg-[#F17A57] hover:bg-[#F17A57]/90 text-primary-foreground shadow-medium transition-all duration-500 font-barlow font-semibold text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed tracking-normal w-full sm:w-auto max-w-md h-10 sm:h-12 px-3 sm:px-4 md:px-6 py-2 rounded-lg inline-flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="transition-all duration-300 group-hover:translate-x-1">
                    Talk to us for your next move
                  </span>
                  <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110">→</span>
                </Button>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className={`relative transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'
            }`}>
              <div
                className="hero-video-container relative overflow-hidden shadow-strong hover:shadow-2xl transition-all duration-700 hover:scale-105 group rounded-none"
                onClick={() => {
                  if (!videoRef.current) return;
                  const v = videoRef.current;
                  if (v.paused) {
                    v.muted = false;
                    setIsMuted(false);
                    v.play().then(() => setIsPlaying(true)).catch(() => {});
                  } else {
                    toggleMute();
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <video 
                  ref={videoRef}
                  src={heroVideo}
                  className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                  className={`hero-video-mute-btn absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0 hover:scale-110 cursor-pointer z-20 ${
                    isMuted 
                      ? 'bg-white/90 hover:bg-white' 
                      : 'bg-[#F17A57]/90 hover:bg-[#F17A57]'
                  }`}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    // Muted icon (speaker with slash)
                    <svg className="w-6 h-6 text-[#F17A57]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    // Unmuted icon (speaker)
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  className={`hero-video-playpause-btn absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0 hover:scale-110 cursor-pointer z-20 ${
                    isPlaying 
                      ? 'bg-white/90 hover:bg-white' 
                      : 'bg-[#F17A57]/90 hover:bg-[#F17A57]'
                  }`}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    // Pause icon
                    <svg className="w-6 h-6 text-[#F17A57]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 4a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1zm7 0a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    // Play icon
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.5 5.5v9l8-4.5-8-4.5z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Popup Modal */}
      <ContactSection 
        isOpen={isContactOpen} 
        onClose={closeContact} 
        isModal={true} 
      />
    </>
  );
};

export default HeroSection;