// hooks/useScrollAnimation.js

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const useScrollZoomAnimationImg = () => {
  useEffect(() => {
    // Ensure ScrollTrigger is activated
    gsap.registerPlugin(ScrollTrigger);

    // Animation timeline
    let imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animet-images",
        start: "top bottom",
        markers: false,
        scrub: 1,
        end: "bottom center",
      },
    });

    // Image pin
    imageTl.to(".animet-images img", {
      scale: 1.2,
      duration: 1,
    });

    // Cleanup function to unregister ScrollTrigger when component unmounts
    return () => {
      imageTl.scrollTrigger.kill(); // Unregister ScrollTrigger for this timeline
    };
  }, []); // Empty dependency array to ensure effect runs only once

  return null; // This hook doesn't return any JSX
};

export default useScrollZoomAnimationImg;
