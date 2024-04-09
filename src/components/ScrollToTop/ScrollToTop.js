import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 189) {
        // Adjust this value to your desired scroll position
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle scrollToTop"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      {/* <i class="ni ni-settings-gear-65"></i> */}
    </button>
   
  );
}

export default ScrollToTopButton;
