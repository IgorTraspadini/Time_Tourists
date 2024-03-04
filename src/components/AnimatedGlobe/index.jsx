import React from "react";
import Wrapper from "../Wrapper";
import * as THREE from 'three';

function AnimatedGlobe() {


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
  color: 0xFF0000
}))

console.log(sphere)
scene.add(sphere)

camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  renederer.render(scene, camera)
}
animate()
  return <Wrapper>AnimatedGlobe</Wrapper>;
}

export default AnimatedGlobe