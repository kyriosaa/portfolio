import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const BackgroundMobile = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background color to black

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10; // Set initial camera position

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
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

    // Create a particle system
    const particles = new THREE.BufferGeometry();
    const particleCount = 20000; // Number of particles
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3e4346,
      size: 0.002,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Load font and create text
    const loader = new FontLoader();
    loader.load("path/to/font.json", (font) => {
      const textGeometry = new TextGeometry("Hello, Three.js!", {
        font: font,
        size: 1,
        height: 0.1,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-5, 0, 0); // Adjust position as needed
      scene.add(textMesh);
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Update particle positions to create the effect of ocean currents
      const positions = particles.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(elapsedTime + positions[i * 3]) * 0.01;
        positions[i * 3] += Math.cos(elapsedTime + positions[i * 3 + 1]) * 0.01;
      }
      particles.attributes.position.needsUpdate = true;

      // Rotate the camera slightly based on the mouse position
      const maxRotation = 0.1; // Maximum rotation angle
      const rotationX =
        (mouse.current.y / window.innerHeight - 0.5) * maxRotation;
      const rotationY =
        (mouse.current.x / window.innerWidth - 0.5) * maxRotation;
      camera.position.x = Math.sin(rotationY) * 10;
      camera.position.y = Math.sin(rotationX) * 5;
      camera.lookAt(scene.position); // Ensure the camera is always looking at the center

      renderer.render(scene, camera);
    };

    animate();

    // Track mouse movement
    const mouse = { current: { x: 0, y: 0 } };
    const onMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default BackgroundMobile;
