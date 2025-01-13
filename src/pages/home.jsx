import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Draggable from "react-draggable";
import "../App.css"; // Assuming you have basic CSS to style the Windows 95 theme

const icons = [
  { id: 1, label: "PROJECTS", link: "/my-computer" },
  { id: 2, label: "ABOUT", link: "/recycle-bin" },
  { id: 3, label: "CONTACT", link: "/contact" },
];

const Home = () => {
  const mountRef = useRef(null);
  const [openWindows, setOpenWindows] = useState([]);

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

    // Background color for the "Windows 95 desktop"
    scene.background = new THREE.Color("#008080");

    // Basic cube (optional for visual flair)
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

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const handleDoubleClick = (icon) => {
    setOpenWindows((prev) => [...prev, icon]);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div
      className="App"
      style={{ display: "flex", height: "95vh", overflow: "hidden" }}
    >
      <div
        className="desktop-icons"
        style={{ width: "100px", padding: "10px", backgroundColor: "#008080" }}
      >
        {icons.map((icon) => (
          <div
            key={icon.id}
            className="desktop-icon"
            onDoubleClick={() => handleDoubleClick(icon)}
            style={{
              marginBottom: "20px",
              textAlign: "center",
              cursor: "pointer",
              color: "white",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ffffff",
                margin: "0 auto",
              }}
            ></div>
            <a style={{ textDecoration: "none", color: "white" }}>
              {icon.label}
            </a>
          </div>
        ))}
      </div>

      <div ref={mountRef} style={{ flex: 1 }}></div>

      {openWindows.map((win) => (
        <Draggable key={win.id}>
          <div
            key={win.id}
            className="window"
            style={{
              position: "absolute",
              top: `${Math.random() * 50 + 100}px`,
              left: `${Math.random() * 50 + 100}px`,
              width: "600px",
              height: "500px",
              backgroundColor: "#ffffff",
              border: "2px solid #000",
              zIndex: 1000,
            }}
          >
            <div
              className="window-header"
              style={{
                backgroundColor: "#000080",
                color: "white",
                padding: "5px",
                cursor: "move",
              }}
            >
              {win.label}
              <button
                onClick={() => closeWindow(win.id)}
                style={{
                  float: "right",
                  color: "white",
                  background: "red",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
            <iframe
              src={win.link}
              title={win.label}
              style={{
                width: "100%",
                height: "calc(100% - 30px)",
                border: "none",
              }}
            />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Home;
