const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

// Configuration
const W = 3840;
const H = 2160;
const FPS = 60;
const DURATION = 10; // seconds
const TOTAL_FRAMES = 30; // test with 30 frames first (0.5s)
const OUTPUT_DIR = path.join(__dirname, 'frames');

const logoPath = path.join(__dirname, 'src/assets/Screenshot 2026-07-01 at 1.46.47 PM.png');

// Orbiting elements
const orbitItems = [
  { label: 'SEO', color: '#00d4ff' },
  { label: 'Social Media', color: '#ff6b9d' },
  { label: 'Web Dev', color: '#a78bfa' },
  { label: 'Digital Mktg', color: '#34d399' },
];

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function drawIcon(ctx, type, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.5;

  const s = size * 0.4;

  switch (type) {
    case 'SEO': // magnifying glass
      ctx.beginPath();
      ctx.arc(0, -s * 0.1, s * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(s * 0.4, s * 0.4);
      ctx.lineTo(s * 0.8, s * 0.8);
      ctx.stroke();
      break;
    case 'Social Media': // network nodes
      for (let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
        const r = s * 0.5;
        const nx = Math.cos(angle) * r;
        const ny = Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(nx, ny);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.2, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'Web Dev': // angle brackets
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-s * 0.5, -s * 0.4);
      ctx.lineTo(-s * 0.1, 0);
      ctx.lineTo(-s * 0.5, s * 0.4);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(s * 0.5, -s * 0.4);
      ctx.lineTo(s * 0.1, 0);
      ctx.lineTo(s * 0.5, s * 0.4);
      ctx.stroke();
      break;
    case 'Digital Mktg': // bullseye / target
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, s * (0.2 + i * 0.2), 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      break;
  }
  ctx.restore();
}

function drawParticles(ctx, t) {
  const particleCount = 80;
  for (let i = 0; i < particleCount; i++) {
    const seed = i * 137.5;
    const x = ((seed * 7.3 + t * 0.02 * (i % 3 + 1) * 30) % W);
    const y = ((seed * 11.7 + t * 0.015 * (i % 2 + 1) * 20) % H);
    const size = 1 + (i % 3) * 0.8;
    const alpha = 0.08 + (i % 5) * 0.03;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 180, 255, ${alpha})`;
    ctx.fill();
  }
}

function drawLightStreaks(ctx, t) {
  const streakCount = 6;
  for (let i = 0; i < streakCount; i++) {
    const seed = i * 53;
    const y = ((seed * 3.7 + t * 0.005 * (i + 1) * 100) % H);
    const x = -200 + (seed * 13.1 % 400);
    const w = 800 + (i % 3) * 400;
    const grad = ctx.createLinearGradient(x, y, x + w, y);
    grad.addColorStop(0, 'rgba(67, 123, 245, 0)');
    grad.addColorStop(0.3, `rgba(67, 123, 245, ${0.02 + i * 0.005})`);
    grad.addColorStop(0.7, `rgba(67, 123, 245, ${0.02 + i * 0.005})`);
    grad.addColorStop(1, 'rgba(67, 123, 245, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, 1.5);
  }
}

async function render() {
  console.log(`Rendering ${TOTAL_FRAMES} frames at ${W}x${H}...`);

  const logo = await loadImage(logoPath);
  console.log(`Logo loaded: ${logo.width}x${logo.height}`);

  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // Pre-compute orbit positions
  const orbitRadius = 650;
  const itemOrbitSpeed = 0.8; // revolutions over duration
  const logoRotSpeed = 1.0; // full rotations over duration

  // Center point
  const cx = W / 2;
  const cy = H / 2;

  // Logo display size (fit within a circle)
  const logoDisplaySize = 340;
  const logoS = Math.min(logo.width, logo.height);
  const logoScale = logoDisplaySize / logoS;

  for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
    const t = frame / FPS; // time in seconds
    const progress = frame / TOTAL_FRAMES; // 0..1

    // Camera zoom & gentle drift
    const zoom = 1.0 + progress * 0.04; // 4% zoom over duration
    const driftX = Math.sin(progress * Math.PI * 0.5) * 20;
    const driftY = Math.sin(progress * Math.PI * 0.3) * 10;

    ctx.save();
    ctx.clearRect(0, 0, W, H);

    // Apply camera transform
    ctx.translate(cx, cy);
    ctx.scale(zoom, zoom);
    ctx.translate(driftX, driftY);
    ctx.translate(-cx, -cy);

    // --- Background ---
    const bgGrad = ctx.createRadialGradient(cx, cy, 200, cx, cy, 1200);
    bgGrad.addColorStop(0, '#12122a');
    bgGrad.addColorStop(0.4, '#0e0e20');
    bgGrad.addColorStop(1, '#060612');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle grid pattern
    ctx.strokeStyle = 'rgba(67, 123, 245, 0.03)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 80) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 80) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Particles
    drawParticles(ctx, t);

    // Light streaks
    drawLightStreaks(ctx, t);

    // --- Center glow ---
    const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, logoDisplaySize * 1.2);
    centerGlow.addColorStop(0, 'rgba(67, 123, 245, 0.06)');
    centerGlow.addColorStop(0.5, 'rgba(67, 123, 245, 0.03)');
    centerGlow.addColorStop(1, 'rgba(67, 123, 245, 0)');
    ctx.fillStyle = centerGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, logoDisplaySize * 1.2, 0, Math.PI * 2);
    ctx.fill();

    // --- Orbiting elements ---
    const orbitProgress = (t * itemOrbitSpeed) / DURATION;
    const baseAngle = orbitProgress * Math.PI * 2;

    for (let i = 0; i < orbitItems.length; i++) {
      const angle = baseAngle + (i / orbitItems.length) * Math.PI * 2;
      const ox = cx + Math.cos(angle) * orbitRadius;
      const oy = cy + Math.sin(angle) * orbitRadius;

      // Orbit path glow dot
      const dotGlow = ctx.createRadialGradient(ox, oy, 0, ox, oy, 20);
      dotGlow.addColorStop(0, orbitItems[i].color + '50');
      dotGlow.addColorStop(1, orbitItems[i].color + '00');
      ctx.fillStyle = dotGlow;
      ctx.beginPath();
      ctx.arc(ox, oy, 20, 0, Math.PI * 2);
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(ox, oy, 5, 0, Math.PI * 2);
      ctx.fillStyle = orbitItems[i].color;
      ctx.fill();

      // Icon
      drawIcon(ctx, orbitItems[i].label, ox, oy - 38, 40, orbitItems[i].color);

      // Label
      ctx.font = '28px -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillStyle = orbitItems[i].color + 'cc';
      ctx.fillText(orbitItems[i].label, ox, oy + 12);
    }

    // --- Orbit ring (subtle) ---
    ctx.strokeStyle = 'rgba(67, 123, 245, 0.06)';
    ctx.lineWidth = 1;
    ctx.setLineDash([8, 12]);
    ctx.beginPath();
    ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // --- Logo with rotation ---
    ctx.save();
    ctx.translate(cx, cy);
    const rotAngle = (t * logoRotSpeed / DURATION) * Math.PI * 2;
    ctx.rotate(rotAngle);

    // Circular clip mask for logo
    ctx.beginPath();
    ctx.arc(0, 0, logoDisplaySize / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Draw logo centered in circle
    const lw = logo.width * logoScale;
    const lh = logo.height * logoScale;
    ctx.drawImage(logo, -lw / 2, -lh / 2, lw, lh);

    ctx.restore();

    // --- Circular border ring ---
    ctx.strokeStyle = 'rgba(67, 123, 245, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, logoDisplaySize / 2 + 4, 0, Math.PI * 2);
    ctx.stroke();

    // Outer ring
    ctx.strokeStyle = 'rgba(67, 123, 245, 0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, logoDisplaySize / 2 + 10, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();

    // Save frame
    const frameNum = String(frame).padStart(5, '0');
    const filename = path.join(OUTPUT_DIR, `frame_${frameNum}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(filename, buffer);

    if (frame % 30 === 0) {
      console.log(`  Frame ${frame}/${TOTAL_FRAMES} (${(frame / TOTAL_FRAMES * 100).toFixed(1)}%)`);
    }
  }

  console.log('All frames rendered!');
}

render().catch(console.error);
