import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    // ✅ Centre automatiquement tous les modèles, y compris Laravel
    const box = new THREE.Box3().setFromObject(scene.scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.scene.position.sub(center);

    // ✅ Couleur spéciale pour Interactive Developer
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5} floatIntensity={2} rotationIntensity={1}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position || [0, 0, 0]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;
