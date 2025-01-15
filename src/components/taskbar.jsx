import "./css/taskbar.css";
import PropTypes from "prop-types";

import Clock from "./clock";

const Taskbar = ({ openWindows, closeWindow }) => {
  return (
    <div className="taskbar">
      <div className="left">
        <div className="start-button">MENU</div>
        <div className="separator"></div>
        <div className="taskbar-icons">
          {openWindows.map((win) => (
            <div
              key={win.id}
              className="taskbar-icon"
              onClick={() => closeWindow(win.id)}
            >
              <img
                src={win.icon}
                alt={win.label}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="separator"></div>
        <Clock />
      </div>
    </div>
  );
};

Taskbar.propTypes = {
  openWindows: PropTypes.func.isRequired,
  closeWindow: PropTypes.func.isRequired,
};

export default Taskbar;
