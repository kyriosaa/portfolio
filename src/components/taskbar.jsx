import { useState } from "react";
import "./css/taskbar.css";
import PropTypes from "prop-types";

import Menu from "./menu";
import Clock from "./clock";

const Taskbar = ({ icons, openWindows, closeWindow }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="taskbar">
      <div className="left">
        <div className="menu-button" onClick={toggleMenu}>
          MENU
        </div>
        {menuOpen && <Menu icons={icons} />}
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
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
  openWindows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeWindow: PropTypes.func.isRequired,
};

export default Taskbar;
