import { useState, useRef, useEffect } from "react";
import "./css/taskbar.css";
import PropTypes from "prop-types";

import Menu from "./menu";
import Clock from "./clock";

const Taskbar = ({ openWindows, closeWindow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null); // Ref for the menu button

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is outside both the menu and the button
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false); // Close the menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="taskbar">
      <div className="left">
        <div
          ref={menuButtonRef} // Attach the ref to the menu button
          className="menu-button"
          onClick={toggleMenu}
        >
          MENU
        </div>
        {menuOpen && (
          <div ref={menuRef} className="menu-container">
            <Menu />
          </div>
        )}
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
