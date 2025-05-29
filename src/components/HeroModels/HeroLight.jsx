import * as THREE from "three";

const HeroLight = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penubra={0.2}
        intensity={100}
        color={'#ffffff'}
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penubra={0.5} 
        intensity={40}
        color={'#4cc9f0'}
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penubra={1} 
        intensity={60}
        color={'#9d4edd'}
      />

      <spotLight
        position={[-2, 5, -6]}
        angle={0.15}
        penubra={0.2}
        intensity={100}
        color={'#ffffff'}
      />

      <primitive
        object={new THREE.RectAreaLight('#A259FF')}
        position={[1, 1, 0.5]}
        intensity={0.5}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
    </>
  );
};

export default HeroLight;
