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
  return (
    <Draggable defaultPosition={{ x: position.left, y: position.top }}>
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
            height: `${dimensions.height - 30}px`,
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
