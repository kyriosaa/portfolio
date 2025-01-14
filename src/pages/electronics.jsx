import { useState } from "react";
import "./css/projects.css";

import NotepadIcon from "../assets/icons/notepad.ico";

import Window from "../components/window";

import BinaryDecoder from "../projects/electronics/7-binary";
import GameConsole from "../projects/electronics/game-console";

// Custom Components for each window
const BinaryDecoderWindow = () => <BinaryDecoder />;
const GameConsoleWindow = () => <GameConsole />;

// Add a `component` property for each item in the list
const items = [
  {
    id: 1,
    label: "7 Segment Display Binary Decoder",
    component: BinaryDecoderWindow,
    icon: NotepadIcon,
    position: { top: 10, left: 10 },
    dimensions: { width: 900, height: 600 },
  },
  {
    id: 2,
    label: "Retro Game Console",
    component: GameConsoleWindow,
    icon: NotepadIcon,
    position: { top: 10, left: 10 },
    dimensions: { width: 900, height: 600 },
  },
];

const Electronics = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const handleDoubleClick = (item) => {
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
                  onClick={() => handleDoubleClick(item)}
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

export default Electronics;
