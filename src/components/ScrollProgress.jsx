import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 z-[999999999] scroll-progress transition-all ease-out duration-500 h-[5px] dark:bg-secondary bg-[#B564F7]"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
};

export default ScrollProgress;
