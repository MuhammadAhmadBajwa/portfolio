<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;
  let animationFrameId: number;

  onMount(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Simple static gradient background for reduced motion
      container.style.background = 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(8, 47, 73, 0.2) 100%)';
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Disable for performance
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Create network nodes
    const nodeCount = 50;
    const nodes: THREE.Mesh[] = [];
    const nodeGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.x = (Math.random() - 0.5) * 100;
      node.position.y = (Math.random() - 0.5) * 100;
      node.position.z = (Math.random() - 0.5) * 100;
      
      // Store velocity for animation
      (node as any).velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      );
      
      nodes.push(node);
      scene.add(node);
    }

    // Create connections between nearby nodes
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.15,
    });

    let lines: THREE.Line[] = [];

    function updateConnections() {
      // Remove old lines
      lines.forEach(line => scene.remove(line));
      lines = [];

      // Create new connections
      const maxDistance = 20;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);
          if (distance < maxDistance) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position,
            ]);
            const line = new THREE.Line(geometry, connectionMaterial);
            scene.add(line);
            lines.push(line);
          }
        }
      }
    }

    // Mouse interaction
    const mouse = new THREE.Vector2();
    let mouseInfluence = new THREE.Vector2(0, 0);

    function onMouseMove(event: MouseEvent) {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseInfluence.x = mouse.x * 5;
      mouseInfluence.y = mouse.y * 5;
    }

    window.addEventListener('mousemove', onMouseMove);

    // Handle resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    // Animation loop
    let frameCount = 0;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      frameCount++;

      // Update node positions
      nodes.forEach((node) => {
        const velocity = (node as any).velocity as THREE.Vector3;
        
        node.position.add(velocity);

        // Bounce off boundaries
        if (Math.abs(node.position.x) > 50) velocity.x *= -1;
        if (Math.abs(node.position.y) > 50) velocity.y *= -1;
        if (Math.abs(node.position.z) > 50) velocity.z *= -1;

        // Mouse influence (subtle)
        node.position.x += mouseInfluence.x * 0.001;
        node.position.y += mouseInfluence.y * 0.001;
      });

      // Update connections every 10 frames for performance
      if (frameCount % 10 === 0) {
        updateConnections();
      }

      // Rotate camera slightly based on mouse
      camera.position.x += (mouseInfluence.x - camera.position.x) * 0.01;
      camera.position.y += (mouseInfluence.y - camera.position.y) * 0.01;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    updateConnections();
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      
      // Dispose of Three.js resources
      renderer.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      connectionMaterial.dispose();
      nodes.forEach(node => scene.remove(node));
      lines.forEach(line => {
        line.geometry.dispose();
        scene.remove(line);
      });
      
      if (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  });
</script>

<div bind:this={container} class="absolute inset-0 -z-10 opacity-40"></div>

