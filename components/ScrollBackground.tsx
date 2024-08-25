import React, { useEffect, useRef } from 'react';

interface ScrollBackgroundProps {
  children: React.ReactNode;
}

const ScrollBackground: React.FC<ScrollBackgroundProps> = ({ children }) => {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const bgClass = entry.target.dataset.bgClass;
            if (mainRef.current && bgClass) {
              mainRef.current.className = mainRef.current.className.replace(/bg-\S+/, bgClass);
            }
          }
        });
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    mainRef.current.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} className="relative min-h-screen flex flex-col bg-sky-200 transition-colors duration-700 overflow-hidden">
      {children}
    </main>
  );
};

export default ScrollBackground;