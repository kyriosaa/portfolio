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
      link: "/itdlbiography",
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
      <br />
      <Typography class="page-subscript">And also this website!</Typography>
    </Box>
  );
};

export default SoftwareProjectsList;
