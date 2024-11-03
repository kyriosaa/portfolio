import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const DeviceDetector = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (
      /android/i.test(userAgent) ||
      (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
    ) {
      setIsMobile(true);
    }
  }, []);

  if (isMobile) {
    return (
      <p>
        This website is only available on PC. Please visit from a desktop or
        laptop computer.
      </p>
    );
  }

  return children;
};

DeviceDetector.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeviceDetector;
