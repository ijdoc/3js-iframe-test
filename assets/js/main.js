import * as THREE from "./threejs/r120/three.module.js";
import { GLTFLoader } from "./threejs/GLTFLoader.js";

// Create scene
var scene = new THREE.Scene();

// Add lighting
var ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
scene.add(ambientLight);
var pointLight = new THREE.PointLight(0xffffff, 0.85);
scene.add(pointLight);

var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// var geometry = new THREE.BoxGeometry();
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var mesh;

var loader = new GLTFLoader();

loader.load(
  "../assets/models/duck.gltf",
  function (gltf) {
    mesh = gltf.scene.children[0]
    scene.add(mesh);
    mesh.position.z = -5;
  },
  // called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

function animate() {
  requestAnimationFrame( animate );
  if (mesh) {
    // mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.01;
    }
  renderer.render( scene, camera );
}
animate();
