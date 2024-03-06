// import React from "react";
// import Wrapper from "../Wrapper";
// import * as THREE from 'three';

// function AnimatedGlobe() {


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // create a sphere
// const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
//   color: 0xFF0000
// }))

// console.log(sphere)
// scene.add(sphere)

// camera.position.z = 5

// function animate() {
//   requestAnimationFrame(animate)
//   renederer.render(scene, camera)
// }
// animate()
//   return <Wrapper>AnimatedGlobe</Wrapper>;
// }

// export default AnimatedGlobe

import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper";
import * as THREE from 'three';

function AnimatedGlobe() {

 const mount = useRef(null); // Create a ref object

 useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    


    // Set the size of the renderer and append it to the mount point
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);
    const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(light);
    // Create a sphere
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 50, 50),
      new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./Animate-Globe.jpg') })
    );
    scene.add(sphere);

    console.log(sphere, "testing sphere")

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to remove the renderer when the component unmounts
    return () => {
      mount.current.removeChild(renderer.domElement);
    };
 }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount


 return <Wrapper ref={mount}>AnimatedGlobe</Wrapper>;
}

export default AnimatedGlobe;

// import React, { useEffect, useRef } from "react";
// import Wrapper from "../Wrapper";
// import * as THREE from 'three';

// function AnimatedGlobe() {
//  const mount = useRef(null); // Create a ref object

//  useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();


//     // Set the size of the renderer and append it to the mount point
//     const wrapperWidth = mount.current.clientWidth; // Get the width of the Wrapper component
//     const wrapperHeight = mount.current.clientHeight; // Get the height of the Wrapper component

//     renderer.setSize(wrapperWidth, wrapperHeight);
//     mount.current.appendChild(renderer.domElement);
//     const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
//     scene.add(light);

//     // Create a sphere
//     const sphere = new THREE.Mesh(
//       new THREE.SphereGeometry(5, 50, 50),
//       new THREE.MeshBasicMaterial({ 
//         map: new THREE.TextureLoader().load("../")
//        }) //specifing the map component to render image
//     );
//     scene.add(sphere);

//     console.log(sphere, "testing sphere")

//     camera.position.z = 15;

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       sphere.rotation.y += 0.01
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Cleanup function to remove the renderer when the component unmounts
//     return () => {
//       mount.current.removeChild(renderer.domElement);
//     };
//  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

//  return <Wrapper ref={mount}>AnimatedGlobe</Wrapper>;
// }

// export default AnimatedGlobe;

