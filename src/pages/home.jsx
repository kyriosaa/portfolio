import { Box, Typography, AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
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
        </Toolbar>
      </AppBar>

      <Box class="routes-layout-box">
        <Box class="home-bio">
          <Typography class="page-content">
            Born in 2002 in Bangkok, Thailand. I have a passion in programming
            and engineering, which has led me to pursuing my degree in
            Electrical Engineering and Computer Science.
          </Typography>
          <Typography class="page-content">
            I have the most experience in web design, both in front-end and
            back-end development.
            <br />I am currently expanding my portfolio in hardware, learning
            C++ and programming microcontrollers.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
