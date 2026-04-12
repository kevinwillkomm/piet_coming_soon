"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function PietBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f3);

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.01,
      100
    );
    camera.position.set(0, 0.5, 4);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    scene.add(new THREE.AmbientLight(0xffffff, 1.2));
    const dir1 = new THREE.DirectionalLight(0xffffff, 1.0);
    dir1.position.set(4, 6, 4);
    scene.add(dir1);
    const dir2 = new THREE.DirectionalLight(0xe8b4b8, 0.6);
    dir2.position.set(-4, 2, -2);
    scene.add(dir2);
    const dir3 = new THREE.DirectionalLight(0xa8c4e0, 0.4);
    dir3.position.set(0, -1, 5);
    scene.add(dir3);

    let model: THREE.Group | null = null;
    let animationId: number;

    const loader = new GLTFLoader();
    loader.load("/Piet.glb", (gltf) => {
      model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.5 / maxDim;

      model.scale.setScalar(scale);
      box.setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      scene.add(model);
    });

    function animate() {
      animationId = requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.001;
      }
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}
