import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.to(progressRef.current, {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <progress
      ref={progressRef}
      max="100"
      value="0"
      className="w-full fixed top-0 left-0 h-2 transition-all duration-300 bg-dark-500 z-1"
    />
  );
  
}
