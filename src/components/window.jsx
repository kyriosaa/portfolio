import "./css/window.css";
import Draggable from "react-draggable";
import PropTypes from "prop-types";

const Window = ({
  id,
  label,
  component: Component,
  position,
  dimensions,
  closeWindow,
  icon,
}) => {
  // Ensure the window's position doesn't go out of bounds
  const clampedPosition = {
    x: Math.min(
      Math.max(0, position.left),
      window.innerWidth - dimensions.width
    ),
    y: Math.min(
      Math.max(0, position.top),
      window.innerHeight - dimensions.height
    ),
  };

  return (
    <Draggable
      defaultPosition={{ x: clampedPosition.x, y: clampedPosition.y }}
      bounds="parent" // Keeps the window within the parent container
    >
      <div
        className="window"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
        }}
      >
        <div className="window-header">
          <div className="window-title">
            <img src={icon} alt={label} className="window-icon" />
            {label}
          </div>
          <button onClick={() => closeWindow(id)}>X</button>
        </div>
        <div
          className="window-content"
          style={{
            width: `${dimensions.width - 20}px`,
            height: `${dimensions.height - 32}px`,
          }}
        >
          <Component />
        </div>
      </div>
    </Draggable>
  );
};

Window.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  position: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
  }).isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  closeWindow: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Window;
