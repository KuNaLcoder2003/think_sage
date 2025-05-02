import React, { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";

const LogoScroller = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollInterval;
    const scrollSpeed = 2; // Change this value to adjust scroll speed

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollElement) {
          scrollElement.scrollLeft += scrollSpeed;
          if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
            scrollElement.scrollLeft = 0; // Reset to create the infinite loop effect
          }
        }
      }, 20);
    };

    startScrolling();

    return () => {
      clearInterval(scrollInterval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-hidden space-x-8 animate-marquee whitespace-nowrap px-4 py-2"
      style={{ animation: "marquee 20s linear infinite" }}
    >
      {/* Add logos inside this div */}
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      <FaReact size={16} />
      {/* Repeat logos to create the effect of infinite scroll */}
      {/* <img src="https://via.placeholder.com/150" alt="Logo 6" className="h-16" />
      <img src="https://via.placeholder.com/150" alt="Logo 7" className="h-16" />
      <img src="https://via.placeholder.com/150" alt="Logo 8" className="h-16" /> */}
      {/* Add more logos as needed */}
    </div>
  );
};

export default LogoScroller;
