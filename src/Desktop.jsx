import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
import { useNavigate, useLocation } from "react-router-dom";
import "./Desktop.css";

import EarthIcon from "./assets/icons/earth.ico";
import ElectronicsIcon from "./assets/icons/electronics.ico";
import SoftwareIcon from "./assets/icons/software.ico";
import PhoneIcon from "./assets/icons/phone.ico";

import Window from "./components/window";
import Taskbar from "./components/taskbar";

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
    label: "About",
    component: AboutWindow,
    icon: EarthIcon,
    position: { top: 65, left: 1200 },
    dimensions: { width: 600, height: 380 },
  },
  {
    id: 2,
    label: "Electronics Projects",
    component: ElectronicsWindow,
    icon: ElectronicsIcon,
    position: { top: 55, left: 200 },
    dimensions: { width: 400, height: 300 },
  },
  {
    id: 3,
    label: "Software Projects",
    component: SoftwareWindow,
    icon: SoftwareIcon,
    position: { top: 80, left: 650 },
    dimensions: { width: 400, height: 300 },
  },
  {
    id: 4,
    label: "Contact",
    component: ContactWindow,
    icon: PhoneIcon,
    position: { top: 650, left: 1400 },
    dimensions: { width: 330, height: 200 },
  },
];

const Desktop = () => {
  const mountRef = useRef(null);
  const [openWindows, setOpenWindows] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   mountRef.current.appendChild(renderer.domElement);

  //   scene.background = new THREE.Color("#008080");

  //   const geometry = new THREE.BoxGeometry();
  //   const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);

  //   cube.position.z = -5;

  //   const animate = () => {
  //     requestAnimationFrame(animate);
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render(scene, camera);
  //   };
  //   animate();

  //   return () => {
  //     mountRef.current.removeChild(renderer.domElement);
  //   };
  // }, []);

  const getHighestZIndex = () =>
    openWindows.length > 0
      ? Math.max(...openWindows.map((win) => win.zIndex || 0))
      : 0;

  useEffect(() => {
    const params = new URLSearchParams();
    openWindows.forEach((win) => {
      params.append(win.label.toLowerCase(), "true");
    });
    const newSearch = `?${params.toString()}`;
    if (location.search !== newSearch) {
      navigate(newSearch, { replace: true });
    }
  }, [openWindows, navigate, location.search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialWindows = icons.filter((icon) =>
      params.has(icon.label.toLowerCase())
    );
    setOpenWindows(initialWindows);
  }, [location.search]);

  const handleClick = (icon) => {
    setOpenWindows((prev) => {
      const existingWindow = prev.find((win) => win.id === icon.id);

      if (existingWindow) {
        // Bring the clicked window to the front
        return prev.map((win) =>
          win.id === icon.id ? { ...win, zIndex: getHighestZIndex() + 1 } : win
        );
      }

      // Open a new window and assign it the highest zIndex
      return [
        ...prev,
        {
          ...icon,
          position: icon.position || { top: 150, left: 150 },
          dimensions: icon.dimensions || { width: 600, height: 500 },
          zIndex: getHighestZIndex() + 1,
        },
      ];
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
              onClick={() => handleClick(icon)}
            >
              <img src={icon.icon} alt={icon.label} />
              <a>{icon.label}</a>
            </div>
          ))}
        </div>

        <div ref={mountRef} style={{ flex: 1 }}></div>

        {openWindows.map((win) => (
          <Window key={win.id} {...win} closeWindow={closeWindow} />
        ))}
      </div>
      <Taskbar
        openWindows={openWindows}
        closeWindow={closeWindow}
        icons={icons}
      />
    </div>
  );
};

export default Desktop;
