import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the user is coming back to a page
    const isBackNavigation = location.state && location.state.scrollPosition !== undefined;

    if (isBackNavigation) {
      // If it's a back navigation, scroll to the saved position
      window.scrollTo(0, location.state.scrollPosition);
    } else {
      // If it's a new navigation, scroll to the top
      window.scrollTo(0, 0);
    }

    // Save the current scroll position when navigating away
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
