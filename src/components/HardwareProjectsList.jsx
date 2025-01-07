import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const HardwareProjectsList = () => {
  const hardwareProjects = [
    { name: "DIY Retro Gaming Console", link: "/game-console" },
    { name: "7 Segment Display Binary Decoder", link: "/7binary" },
    // Add more projects as needed
  ];

  return (
    <Box>
      {hardwareProjects.map((project, index) => (
        <Button
          key={index}
          component={Link}
          to={project.link}
          disableRipple
          class="content-link"
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Typography>{project.name}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default HardwareProjectsList;
