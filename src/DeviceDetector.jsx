import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

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
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        textAlign="center"
        bgcolor="black"
        color="white"
        padding={2}
        zIndex={9999} // Ensure the box is on top
        position="fixed" // Ensure the box covers the entire screen
        top={0}
        left={0}
        width="100%"
      >
        <Typography variant="h6">
          This website is only available on PC. Please visit from a desktop or
          laptop computer.
        </Typography>
      </Box>
    );
  }

  return children;
};

DeviceDetector.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeviceDetector;
