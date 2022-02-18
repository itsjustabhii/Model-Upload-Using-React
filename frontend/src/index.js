import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

ReactDOM.render(<App />, document.getElementById('root'));



const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene();

const loader = new GLTFLoader()
loader.load('http://127.0.0.1:8000/static/post_images/P7.glb', function(glb){
    console.log(glb)
    const root = glb.scene;
    root.scale.set(0.05,0.05,0.05)
    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
}, function(error){
    console.log("An error occured")
})

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)

// Boilerplate canvas code
// const sizes = {
//     width: window.width,
//     height: window.height
// }

const camera = new THREE.PerspectiveCamera(75, 800/800, 0.2, 100)
camera.position.set(0,1,2)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})


renderer.setSize(800, 800)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.outputEncoding = true

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

}

animate()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
