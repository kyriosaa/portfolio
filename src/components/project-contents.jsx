import PropTypes from "prop-types";
import "./css/project-contents.css";

const ProjectContents = ({ images, title, text, date, link, source }) => {
  return (
    <div className="layout-container">
      {/* Images Section */}
      <div className="images-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="text-container">
        <div className="fixed">
          <p className="title">{title}</p>
          <p className="text"> {text}</p>
          <p className="date">{date}</p>
          <br />
          <a
            className="link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
          <br />
          <a
            className="source"
            href={source}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source}
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectContents.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ProjectContents;
