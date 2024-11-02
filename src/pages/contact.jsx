import { Box, Typography, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const Contact = () => {
  return (
    <Box>
      <AppBar class="appbar">
        <Typography class="name" component="div">
          Purit Hongjirakul
        </Typography>
        <Typography class="title" component="div">
          Engineer & Developer
        </Typography>
        <Button
          component={Link}
          to="/"
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/projects"
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Projects
        </Button>
        <Button
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          —
        </Button>
        <Typography class="credit">
          Website created and designed by Purit Hongjirakul
        </Typography>
      </AppBar>

      <Box class="routes-layout-box">
        <Box class="content-alignment">
          <Typography class="page-content">
            Location: Taipei City, Taiwan <br /> Email: kyriosaaph@gmail.com
          </Typography>
          <Button
            class="content-link"
            href="https://www.linkedin.com/in/kyriosaa"
            disableRipple
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Improve security
          >
            Linkedin <FiExternalLink />
          </Button>
          <br />
          <Button
            class="content-link"
            href="https://github.com/kyriosaa"
            disableRipple
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Improve security
          >
            GitHub <FiExternalLink />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
