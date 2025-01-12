import { useEffect, useRef } from "react";
import * as THREE from "three";

const Background = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1e1e1e); // Dark gray background

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = 0;
    renderer.domElement.style.left = 0;
    renderer.domElement.style.zIndex = -1;
    mountRef.current.appendChild(renderer.domElement);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Create checkered texture
    const createCheckeredTexture = () => {
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d");
      const colors = ["#ffffff", "#000000"]; // White and black squares
      const squareSize = size / 8;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          ctx.fillStyle = colors[(i + j) % 2];
          ctx.fillRect(i * squareSize, j * squareSize, squareSize, squareSize);
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(10, 10); // Adjust to control the density of the checkered pattern

      return texture;
    };

    // Create plane
    const createPlane = (texture, positionY) => {
      const geometry = new THREE.PlaneGeometry(10, 10);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(geometry, material);
      plane.position.y = positionY;
      plane.rotation.x = -Math.PI / 2; // Rotate to be horizontal
      return plane;
    };

    // Add planes to the scene
    const checkeredTexture = createCheckeredTexture();
    const planeTop = createPlane(checkeredTexture, 5);
    const planeBottom = createPlane(checkeredTexture, -5);
    scene.add(planeTop);
    scene.add(planeBottom);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move planes toward the camera
      planeTop.position.z += 0.05;
      planeBottom.position.z += 0.05;

      // Reset position to create a looping effect
      if (planeTop.position.z > camera.position.z) {
        planeTop.position.z = -10;
      }
      if (planeBottom.position.z > camera.position.z) {
        planeBottom.position.z = -10;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Background;
