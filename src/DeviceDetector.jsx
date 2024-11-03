import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Background from "./Background";

const DeviceDetector = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User Agent:", userAgent); // Debugging information
    if (
      /android/i.test(userAgent) ||
      (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    ) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    console.log("Mobile device detected"); // Debugging information
    return <Background />;
  }

  return children;
};

DeviceDetector.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeviceDetector;
