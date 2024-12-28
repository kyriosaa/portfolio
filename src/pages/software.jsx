import { Box, Typography, AppBar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { motion } from "framer-motion";
import SoftwareProjectsList from "../components/SoftwareProjectsList";

const Software = () => {
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
      </AppBar>

      <Box class="routes-layout-box">
        <motion.div
          class="selector-alignment"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Box class="page-content">
            <IconButton
              class="content-link"
              disableRipple
              component={Link}
              to="/projects"
            >
              <MdArrowBack />
            </IconButton>
            <Box class="page-content">Software Applications</Box>
            <br />

            <SoftwareProjectsList />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Software;
