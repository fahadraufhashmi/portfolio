/* ════════════════════════════════════════════════════════════
   ✨ FAHAD PORTFOLIO - UNIFIED INTERACTION ENGINE (2026)
   ════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. AOS ANIMATION SYSTEM INITIALIZATION ──
  if (typeof AOS !== 'undefined') {
    AOS.init({ 
      once: true, 
      easing: 'ease-out-cubic' 
    });
  }

  // ── 2. NAVBAR SCROLL INTERACTIVE EFFECTS ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 10 
        ? '0 4px 30px rgba(79,70,229,.13)' 
        : '0 2px 20px rgba(79,70,229,.06)';
    });
  }

  // ── 3. NAV-CENTER RECURSIVE TYPING CONTROLLER ──
  const phrases = [
    "Building AI-powered solutions 🤖",
    "Data Science enthusiast 📊",
    "NUML · BSSE 7th Semester 🎓",
    "Pakistan's next AI engineer 🇵🇰"
  ];
  let pi = 0, ci = 0, deleting = false;
  const typeElement = document.getElementById('nav-type');

  if (typeElement) {
    function executeTypingLoop() {
      const currentFullPhrase = phrases[pi];
      if (!deleting) { 
        typeElement.textContent = currentFullPhrase.slice(0, ++ci); 
        if (ci === currentFullPhrase.length) { 
          deleting = true; 
          setTimeout(executeTypingLoop, 1800); 
          return; 
        } 
      } else { 
        typeElement.textContent = currentFullPhrase.slice(0, --ci); 
        if (ci === 0) { 
          deleting = false; 
          pi = (pi + 1) % phrases.length; 
        } 
      }
      setTimeout(executeTypingLoop, deleting ? 38 : 62);
    }
    executeTypingLoop();
  }

  // ── 4. NEURAL NETWORK PARTICLES CANVAS COMPUTATION ENGINE ──
  const canvas = document.getElementById('neural-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, nodes = [], mouse = { x: -999, y: -999 };
    const NODE_COUNT = 52;
    const MAX_DIST = 165;

    function resizeCanvasContext() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resizeCanvasContext();
    window.addEventListener('resize', resizeCanvasContext);

    // Initialize analytical space nodes matrix
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * W, 
        y: Math.random() * H,
        vx: (Math.random() - .5) * .45, 
        vy: (Math.random() - .5) * .45,
        r: 2.5 + Math.random() * 2.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: .018 + Math.random() * .018,
        color: Math.random() > .5 ? [79, 70, 229] : [124, 58, 237]
      });
    }

    // Input tracking capture channels
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => { 
      mouse.x = -999; 
      mouse.y = -999; 
    });

    // Elevate touch context properties safely
    if (canvas.parentElement) canvas.parentElement.style.pointerEvents = 'auto';
    canvas.style.pointerEvents = 'auto';

    function renderNeuralFrame() {
      ctx.clearRect(0, 0, W, H);

      // Node connection path calculations
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * .35;
            const [r, g, b] = nodes[i].color;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = .8;
            ctx.stroke();
          }
        }
        
        // Active mouse position hardware tracking mapping
        const mdx = nodes[i].x - mouse.x, mdy = nodes[i].y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          const alpha = (1 - mdist / 120) * .55;
          ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        }
      }

      // Individual coordinate translations
      nodes.forEach(n => {
        n.pulse += n.pulseSpeed;
        const pr = n.r + Math.sin(n.pulse) * 1.4;
        const [r, g, b] = n.color;

        // Core peripheral glow
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 3.5);
        grd.addColorStop(0, `rgba(${r},${g},${b},.22)`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, pr * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Mathematical coordinate core centers
        ctx.beginPath();
        ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},.75)`;
        ctx.fill();

        // Bounds tracking loops
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      requestAnimationFrame(renderNeuralFrame);
    }
    renderNeuralFrame();
  }

});