import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Draggable from "react-draggable";
import { useNavigate, useLocation } from "react-router-dom";
import "./Desktop.css";
import About from "./pages/about";
import Electronics from "./pages/electronics";
import Software from "./pages/software";
import Contact from "./pages/contact";

// Custom Components for each window
const AboutWindow = () => <About />;
const ElectronicsWindow = () => <Electronics />;
const SoftwareWindow = () => <Software />;
const ContactWindow = () => <Contact />;

// Add a `component` property for each icon
const icons = [
  {
    id: 1,
    label: "ABOUT",
    component: AboutWindow,
    icon: "/icons/earth.ico",
    position: { top: 25, left: 175 },
    dimensions: { width: 600, height: 520 },
  },
  {
    id: 2,
    label: "ELECTRONICS PROJECTS",
    component: ElectronicsWindow,
    icon: "/icons/electronics.ico",
    position: { top: 45, left: 325 },
    dimensions: { width: 400, height: 300 },
  },
  {
    id: 3,
    label: "SOFTWARE PROJECTS",
    component: SoftwareWindow,
    icon: "/icons/software.ico",
    position: { top: 500, left: 225 },
    dimensions: { width: 400, height: 300 },
  },
  {
    id: 4,
    label: "CONTACT",
    component: ContactWindow,
    icon: "/icons/phone.ico",
    position: { top: 600, left: 1150 },
    dimensions: { width: 330, height: 200 },
  },
];

const Desktop = () => {
  const mountRef = useRef(null);
  const [openWindows, setOpenWindows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    scene.background = new THREE.Color("#008080");

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.z = -5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    openWindows.forEach((win) => {
      params.append(win.label.toLowerCase(), "true");
    });
    navigate(`?${params.toString()}`, { replace: true });
  }, [openWindows, navigate]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialWindows = icons.filter((icon) =>
      params.has(icon.label.toLowerCase())
    );
    setOpenWindows(initialWindows);
  }, [location.search]);

  const handleDoubleClick = (icon) => {
    setOpenWindows((prev) => {
      if (!prev.some((win) => win.id === icon.id)) {
        return [
          ...prev,
          {
            ...icon,
            position: icon.position || { top: 150, left: 150 },
            dimensions: icon.dimensions || { width: 600, height: 500 },
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
        <div className="desktop-icons">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="desktop-icon"
              onDoubleClick={() => handleDoubleClick(icon)}
            >
              <img src={icon.icon} alt={icon.label} />
              <a>{icon.label}</a>
            </div>
          ))}
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
      <div className="taskbar">
        <div className="start-button">Start</div>
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
    </div>
  );
};

export default Desktop;
