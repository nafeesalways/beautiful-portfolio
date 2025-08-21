import React, { useEffect, useRef, useState } from "react";

const ReviewOnScroll = ({ children, animationClass = "fade-in-up" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.2,  
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 transform transition duration-700 ease-out ${
        isVisible ? `${animationClass} opacity-100` : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ReviewOnScroll;
