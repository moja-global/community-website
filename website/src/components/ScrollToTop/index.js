import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 500) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) {
    return false;
  }
  return (
    <div className="scroll-container cursor-pointer">
      <div className="icon" onClick={scrollToTop}>
        <FaArrowAltCircleUp className="svg" size="100%" />
      </div>
    </div>
  );
};

export default ScrollToTop;
