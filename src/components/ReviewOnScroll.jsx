import React, { useEffect, useRef, useState } from "react";

const ReviewOnScroll = ({ 
  children, 
  animationClass = "fade-in-up",
  threshold = 0.1,
  delay = 0 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? `${animationClass} opacity-100 translate-y-0` 
          : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default ReviewOnScroll;
