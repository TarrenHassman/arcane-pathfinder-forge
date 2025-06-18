import React, { useRef, useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";
import { cn } from "@/lib/utils";

const BottomHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "bg-transparent relative min-h-150 flex items-center justify-center overflow-hidden transition-opacity duration-1000 ease-out",
        isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
      )}
    >
   

      {/* Content */}
      <div className="mb-8">
          <WaitlistForm />
        </div>
    </section>
  );
};

export default BottomHeroSection;
