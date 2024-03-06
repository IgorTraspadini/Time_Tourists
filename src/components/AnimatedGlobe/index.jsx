// import React, { useEffect, useRef } from "react";
// import Wrapper from "../Wrapper";
// import * as THREE from 'three';

// function AnimatedGlobe() {

//  const mount = useRef(null); // Create a ref object

//  useEffect(() => {
//     const width = mount.current.clientWidth; // Get the width of the container
//     const height = mount.current.clientHeight; // Get the height of the container

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
 
//     renderer.setSize(width, height);
//     mount.current.appendChild(renderer.domElement);

//     const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
//     scene.add(light);

//     // Create a sphere
//     const sphere = new THREE.Mesh(
//       new THREE.SphereGeometry(5, 50, 50),
//       new THREE.MeshBasicMaterial({ map : new THREE.TextureLoader().load('./Animate-Globe.jpg') })
//     );
//     scene.add(sphere);

//     console.log(sphere, "testing sphere")

//     camera.position.z = 10;

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


//  return <Wrapper className="animated-globe-wrapper p-0" ref={mount}></Wrapper>;
// }

// export default AnimatedGlobe;

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

import React, { useEffect, useRef } from "react";
import Wrapper from "../Wrapper";
import * as THREE from 'three';

function AnimatedGlobe() {
  const mount = useRef(null); // Create a ref object

  useEffect(() => {
    const width = mount.current.clientWidth; // Get the width of the container
    const height = mount.current.clientHeight; // Get the height of the container

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer(
      {antialias: true //makes edges smoother/ not pixelised
      });

    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio)// make the graphics sharper
    mount.current.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(light);

    // Create a sphere
    const sphereRadius = Math.min(width, height) * 0.2; // calculates the sphere's radius based on the minimum of the container's width and height
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(sphereRadius, 50, 50),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('./Animate-Globe.jpg') })
    );
    scene.add(sphere);

    console.log(sphere, "testing sphere");

    camera.position.z = sphereRadius * 2; // Adjust camera position based on sphere size

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.003;
      renderer.render(scene, camera);
    };

    animate();
    //Add an eventListener for mouse interaction with Earth
    // Translate mouse coordinates from the webspace to  3D space
    const mouse = {
      x: undefined, //just testing
      y: undefined// just testing
    }

    addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / innerHeight) * 2 - 1;
    });
    console.log(mouse)
    // Handle window resize
    const handleResize = () => {
      const newWidth = mount.current.clientWidth;
      const newHeight = mount.current.clientHeight;

      // Update renderer and camera aspect ratio
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the renderer and event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.current.removeChild(renderer.domElement);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

  return <Wrapper className="animated-globe-wrapper p-0" ref={mount}></Wrapper>;
}

export default AnimatedGlobe;
