import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/electronics.css";
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
    position: { top: 25, left: 175 },
    dimensions: { width: 600, height: 600 },
  },
  {
    id: 2,
    label: "Game Console",
    component: GameConsoleWindow,
    position: { top: 45, left: 325 },
    dimensions: { width: 600, height: 600 },
  },
];

const Electronics = () => {
  const mountRef = useRef(null);
  const [openWindows, setOpenWindows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams();
    openWindows.forEach((win) => {
      params.append(win.label.toLowerCase(), "true");
    });
    navigate(`?${params.toString()}`, { replace: true });
  }, [openWindows, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialWindows = items.filter((item) =>
      params.has(item.label.toLowerCase())
    );
    setOpenWindows(initialWindows);
  }, [location.search]);

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
      <div className="App">
        <div className="desktop-list">
          <ul>
            {items.map((item) => (
              <a
                key={item.id}
                onDoubleClick={() => handleDoubleClick(item)}
                className="desktop-item"
              >
                {item.label}
              </a>
            ))}
          </ul>
        </div>

        <div ref={mountRef} style={{ flex: 1 }}></div>

        {openWindows.map((win) => {
          const Component = win.component;
          return (
            <Draggable
              key={win.id}
              defaultPosition={{ x: win.position.left, y: win.position.top }}
            >
              <div
                className="window"
                style={{
                  width: `${win.dimensions.width}px`,
                  height: `${win.dimensions.height}px`,
                }}
              >
                <div className="window-header">
                  {win.label}
                  <button onClick={() => closeWindow(win.id)}>X</button>
                </div>
                <div
                  className="window-content"
                  style={{
                    width: `${win.dimensions.width - 20}px`,
                    height: `${win.dimensions.height - 35}px`,
                  }}
                >
                  <Component />
                </div>
              </div>
            </Draggable>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
