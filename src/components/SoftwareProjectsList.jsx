import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const SoftwareProjectsList = () => {
  const softwareProjects = [
    { name: "Wipeout", link: "/wipeout" },
    {
      name: "SnackStore",
      link: "/snackstore",
    },
    {
      name: "AI-Enhanced Website Biography",
      link: "/lynshunliensung",
    },
    // Add more projects as needed
  ];

  return (
    <Box>
      {softwareProjects.map((project, index) => (
        <Button
          key={index}
          component={Link}
          to={project.link}
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

export default SoftwareProjectsList;
