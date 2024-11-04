import PropTypes from "prop-types";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SoftwareProjectInfo = ({ data }) => {
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
        <Box class="project-alignment">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {/* Image */}
            <Box class="project-info">
              <img src={data.imgsrc} alt="Project image" height={315} />
            </Box>
            <Box>
              {/* Title */}
              <Typography class="page-bold">{data.title}</Typography>

              {/* Description */}
              <Typography class="page-light">{data.description}</Typography>

              {/* Date */}
              <Typography class="page-subscript">{data.date}</Typography>

              <Box class="project-link-area">
                {/* Website page */}
                <Typography class="page-light">
                  <Button
                    class="project-link"
                    href={data.website}
                    disableRipple
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Improve security
                  >
                    {data.website}
                  </Button>
                </Typography>

                {/* Source code */}
                <Box>
                  <Button
                    class="project-link"
                    href={data.sourcecode}
                    disableRipple
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer"
                  >
                    Source code <FaGithub />
                  </Button>
                </Box>
              </Box>

              {/* Back button */}
              <Box class="project-back-button">
                <Button
                  class="content-link"
                  component={Link}
                  to="/software"
                  disableRipple
                >
                  <MdArrowBack /> Back
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

SoftwareProjectInfo.propTypes = {
  data: PropTypes.shape({
    imgsrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    sourcecode: PropTypes.string.isRequired,
  }).isRequired,
};

export default SoftwareProjectInfo;
