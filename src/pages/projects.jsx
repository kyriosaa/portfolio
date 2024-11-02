import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Box>
      <AppBar class="appbar">
        <Toolbar class="toolbar">
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
        </Toolbar>
      </AppBar>

      <Box class="routes-layout-box">
        <Typography class="page-content">Projects</Typography>
      </Box>
    </Box>
  );
};

export default Projects;
