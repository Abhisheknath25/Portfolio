import * as THREE from 'three';

export function initScene() {
  const canvas = document.querySelector('#bg-canvas');
  const scene = new THREE.Scene();
  // Deep futuristic space color
  scene.background = new THREE.Color('#030014');

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
  });
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Adding a futuristic particle network / nodes
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;
  
  const posArray = new Float32Array(particlesCount * 3);
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 60; // scattered between -30 and 30
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.15,
    color: '#64ffda',
    transparent: true,
    opacity: 0.2,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Wireframe geometry in the center to look like an intricate data structure
  // TorusKnot gives a very deep "neural network" mathematical vibe
  const geometry = new THREE.TorusKnotGeometry(16, 3, 150, 30);
  const material = new THREE.MeshBasicMaterial({ 
    color: '#64ffda', 
    wireframe: true,
    transparent: true,
    opacity: 0.05
  });
  const object = new THREE.Mesh(geometry, material);
  scene.add(object);

  // Mouse interactivity
  let mouseX = 0;
  let mouseY = 0;

  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Rotate slowly
    object.rotation.y = elapsedTime * 0.1;
    object.rotation.x = elapsedTime * 0.05;

    particlesMesh.rotation.y = -elapsedTime * 0.05;

    // Gentle floating effect with mouse tracking
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;
    
    // Parallax effect with mouse
    camera.position.x += 0.05 * (targetX - camera.position.x);
    camera.position.y += 0.05 * (- targetY - camera.position.y);
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();
}
