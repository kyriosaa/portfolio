import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Background from "./Background";

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
      >
        <Background />
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
