import React, {useState, useEffect, useCallback} from "react";
import "./Top.scss";

export default function Top() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrolled =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    setVisible(scrolled);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
  }

  return (
    <button
      onClick={scrollToTop}
      id="topButton"
      title="Go to top"
      style={{visibility: visible ? "visible" : "hidden"}}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
