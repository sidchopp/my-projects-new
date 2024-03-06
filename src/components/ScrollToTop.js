import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import IconButton from "@mui/material/IconButton";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showButton && (
        <div className="scrollToTop">
          <IconButton onClick={scrollToTop}>
            <KeyboardDoubleArrowUpIcon className="icon" fontSize="medium" />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
