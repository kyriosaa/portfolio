import { useState } from "react";
import "./css/projects.css";

import NotepadIcon from "../assets/icons/notepad.ico";

import Window from "../components/window";

import ItdlBiography from "../projects/software/itdl-biography";
import SnackStore from "../projects/software/snackstore";
import Wipeout from "../projects/software/wipeout";

// Custom Components for each window
const ItdlBiographyWindow = () => <ItdlBiography />;
const SnackStoreWindow = () => <SnackStore />;
const WipeoutWindow = () => <Wipeout />;

// Add a `component` property for each item in the list
const items = [
  {
    id: 1,
    label: "AI-Enhanced Website Biography",
    component: ItdlBiographyWindow,
    icon: NotepadIcon,
    position: { top: 10, left: 10 },
    dimensions: { width: 900, height: 600 },
  },
  {
    id: 2,
    label: "SnackStore",
    component: SnackStoreWindow,
    icon: NotepadIcon,
    position: { top: 10, left: 10 },
    dimensions: { width: 900, height: 600 },
  },
  {
    id: 3,
    label: "Wipeout",
    component: WipeoutWindow,
    icon: NotepadIcon,
    position: { top: 10, left: 10 },
    dimensions: { width: 900, height: 600 },
  },
];

const Software = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const handleClick = (item) => {
    setOpenWindows((prev) => {
      if (!prev.some((win) => win.id === item.id)) {
        return [
          ...prev,
          {
            ...item,
            position: item.position || { top: 150, left: 150 },
            dimensions: item.dimensions || { width: 600, height: 500 },
          },
        ];
      }
      return prev;
    });
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div>
      <div>
        <div className="projects-list">
          <ul>
            {items
              .slice()
              .reverse()
              .map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className="projects-item"
                >
                  {item.label}
                </li>
              ))}
          </ul>
        </div>

        <div>
          {openWindows.map((win) => (
            <Window key={win.id} {...win} closeWindow={closeWindow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Software;
