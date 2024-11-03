import { Box, Typography, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
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
        <Button
          component={Link}
          to="/contact"
          color="inherit"
          disableRipple
          sx={{
            textTransform: "capitalize",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Contact
        </Button>
        <Typography class="credit">
          Website created and designed by Purit Hongjirakul
        </Typography>
      </AppBar>

      <Box class="routes-layout-box">
        <motion.div
          class="content-alignment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typography class="page-content">
            Born in 2002 in Bangkok, Thailand. I have a passion in programming
            and engineering, which has led me to pursuing my degree in
            Electrical Engineering and Computer Science.
          </Typography>
          <Typography class="page-content">
            I have 1 year of experience in web design, using JavaScript,
            TypeScript, and Python to create responsive and structured websites.
            <br />I have knowledge of popular frameworks such as React.js and
            experience with REST APIs and back-end development.
          </Typography>
          <Typography class="page-content">
            I am currently expanding my portfolio in hardware, learning C++ and
            programming microcontrollers.
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
