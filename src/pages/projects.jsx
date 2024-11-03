import { Box, Typography, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
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
          <Box class="page-content">
            <Button
              class="content-link"
              component={Link}
              to="/hardware"
              disableRipple
            >
              Hardware
            </Button>
            <br />
            <Button
              class="content-link"
              component={Link}
              to="/software"
              disableRipple
            >
              Software
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Projects;
