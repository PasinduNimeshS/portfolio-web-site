import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, width = "100%", className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            // Toggle visibility based on intersection to allow bidirectional animation
            setIsVisible(entry.isIntersecting);
        },
        { 
          threshold: 0.1, 
          rootMargin: "0px 0px -50px 0px" 
        }
    );
    if (ref.current) observer.observe(ref.current);
    
    // Clean up observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div 
        ref={ref} 
        style={{ width, transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
        className={`${className} transition-all duration-700 ease-out transform ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100 blur-none" 
              : "opacity-0 translate-y-10 scale-95 blur-sm"
        }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;