"use client";
import React, { useEffect, useRef, useState } from "react";

const TopOfViewportComponent: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  // Function to check if the element's top is at 112px from the viewport top
  const checkPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      // Check if the top of the element is exactly 112px from the top of the viewport
      if (Math.abs(rect.top - 112) < 10) {
        // Small tolerance for precision
        setInView(true);
      }
      if (Math.abs(rect.bottom - 112) > 10) {
        setInView(false);
      }
    }
  };

  useEffect(() => {
    // IntersectionObserver to monitor when the element is within a general range
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add scroll event listener when element is in the viewport
          window.addEventListener("scroll", checkPosition);
          // Initial position check
          checkPosition();
        } else {
          // Remove scroll event listener when element is out of the viewport
          window.removeEventListener("scroll", checkPosition);
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      window.removeEventListener("scroll", checkPosition);
    };
  }, []);

  return (
    <div>
      <div style={{ height: "150vh" }}>Scroll down to see the effect</div>

      <div ref={ref} className="target-element h-screen border-4 border-black">
        {inView ? (
          <p>The element has reached 112px from the top of the viewport!</p>
        ) : (
          <p>Keep scrolling...</p>
        )}
      </div>

      <div style={{ height: "150vh" }}></div>
    </div>
  );
};

export default TopOfViewportComponent;
