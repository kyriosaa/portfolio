import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

const Background = () => {
  const mountRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Set background color to black

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2; // Set initial camera position

    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Enable antialiasing
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Optimize for high-DPI displays
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
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Create a plane geometry
    const planeGeometry = new THREE.PlaneGeometry(20, 20, 100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({
      color: 0x777777,
      wireframe: true,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);

    // Create a wavy line pattern on the plane
    const createWavyPattern = () => {
      const vertices = planeGeometry.attributes.position.array;
      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        vertices[i + 2] = Math.sin(x * 2 + y * 2) * 0.5;
      }
      planeGeometry.attributes.position.needsUpdate = true;
    };

    createWavyPattern();

    // Track mouse movement
    const onMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Set up post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const fisheyeShader = {
      uniforms: {
        tDiffuse: { value: null },
        mouse: { value: new THREE.Vector2(0, 0) },
        strength: { value: 2 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 mouse;
        uniform float strength;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          vec2 offset = mouse - uv;
          float dist = length(offset);
          float falloff = smoothstep(0.0, strength, dist);
          uv += offset * (1.0 - falloff) * 0.05; // Adjust the distortion strength
          gl_FragColor = texture2D(tDiffuse, uv);
        }
      `,
    };

    const fisheyePass = new ShaderPass(fisheyeShader);
    composer.addPass(fisheyePass);

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = new THREE.Clock().getElapsedTime();

      // Rotate the plane for a dynamic effect
      plane.rotation.z += 0.0003;

      // Update fisheye shader with mouse position
      fisheyePass.uniforms.mouse.value.set(
        mouse.current.x * 0.5 + 0.5,
        mouse.current.y * 0.5 + 0.5
      );

      composer.render();
    };

    animate();

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Background;
