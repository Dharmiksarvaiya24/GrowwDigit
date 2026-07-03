import { useEffect, useRef } from 'react';

const HERO_TONES = {
  ink: [17, 24, 39],
  gray: [107, 114, 128],
  line: [156, 163, 175],
  soft: [229, 231, 235],
};

const CTA_COLORS = {
  primary: [255, 255, 255],
  secondary: [125, 211, 252],
  accent: [167, 243, 208],
  highlight: [255, 255, 255],
};

const rgba = ([r, g, b], alpha) => `rgba(${r}, ${g}, ${b}, ${alpha})`;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function makeHeroScene(width, height) {
  const railCount = width < 640 ? 5 : 8;
  const markerCount = width < 640 ? 14 : 26;
  const rails = [];
  const markers = [];

  for (let i = 0; i < railCount; i += 1) {
    const progress = railCount === 1 ? 0.5 : i / (railCount - 1);

    rails.push({
      y: (height * 0.16) + (progress * height * 0.68) + ((Math.random() - 0.5) * height * 0.04),
      amplitude: 16 + Math.random() * 24,
      detail: 4 + Math.random() * 8,
      frequency: 0.0028 + Math.random() * 0.002,
      detailFrequency: 0.011 + Math.random() * 0.006,
      phase: Math.random() * Math.PI * 2,
      detailPhase: Math.random() * Math.PI * 2,
      speed: (i % 2 === 0 ? 1 : -1) * (0.00012 + Math.random() * 0.0001),
      detailSpeed: (i % 2 === 0 ? -1 : 1) * (0.0002 + Math.random() * 0.00012),
      alpha: 0.08 + ((1 - Math.abs(progress - 0.5)) * 0.045),
      width: i % 3 === 0 ? 1.35 : 0.85,
    });
  }

  for (let i = 0; i < markerCount; i += 1) {
    markers.push({
      rail: Math.floor(Math.random() * railCount),
      offset: Math.random(),
      speed: 0.000045 + Math.random() * 0.000055,
      length: 18 + Math.random() * 36,
      width: 1 + Math.random() * 0.9,
      delay: Math.random() * 0.3,
    });
  }

  return { rails, markers };
}

function makeCtaScene(width, height) {
  const count = width < 640 ? 6 : width < 1024 ? 8 : 11;
  const lanes = [];

  for (let i = 0; i < count; i += 1) {
    const progress = count === 1 ? 0.5 : i / (count - 1);
    const direction = i % 2 === 0 ? 1 : -1;

    lanes.push({
      y: (height * 0.12) + (height * 0.76 * progress) + ((Math.random() - 0.5) * height * 0.08),
      amplitude: 14 + Math.random() * 30,
      detailAmplitude: 4 + Math.random() * 10,
      frequency: 0.0045 + Math.random() * 0.004,
      detailFrequency: 0.013 + Math.random() * 0.01,
      phase: Math.random() * Math.PI * 2,
      detailPhase: Math.random() * Math.PI * 2,
      speed: direction * (0.00028 + Math.random() * 0.00024),
      detailSpeed: direction * (0.00045 + Math.random() * 0.00035),
      width: 0.7 + Math.random() * 1.2,
      offset: Math.random(),
      dashSpeed: 0.00012 + Math.random() * 0.00008,
      hue: i % 3,
    });
  }

  return { lanes };
}

function heroY(x, rail, time) {
  return (
    rail.y
    + Math.sin((x * rail.frequency) + rail.phase + (time * rail.speed)) * rail.amplitude
    + Math.sin((x * rail.detailFrequency) + rail.detailPhase + (time * rail.detailSpeed)) * rail.detail
  );
}

function ctaY(x, lane, time) {
  return (
    lane.y
    + Math.sin((x * lane.frequency) + lane.phase + (time * lane.speed)) * lane.amplitude
    + Math.sin((x * lane.detailFrequency) + lane.detailPhase - (time * lane.detailSpeed)) * lane.detailAmplitude
  );
}

function drawHeroSpotlight(ctx, width, height, time) {
  const pulse = Math.sin(time * 0.00035) * 0.04;
  const rightGlow = ctx.createRadialGradient(
    width * 0.78,
    height * 0.42,
    20,
    width * 0.78,
    height * 0.42,
    width * 0.48,
  );
  rightGlow.addColorStop(0, rgba(HERO_TONES.ink, 0.075 + pulse));
  rightGlow.addColorStop(0.52, rgba(HERO_TONES.gray, 0.025));
  rightGlow.addColorStop(1, rgba(HERO_TONES.gray, 0));

  const floorGlow = ctx.createRadialGradient(
    width * 0.6,
    height * 0.95,
    10,
    width * 0.6,
    height * 0.95,
    width * 0.62,
  );
  floorGlow.addColorStop(0, rgba(HERO_TONES.gray, 0.06));
  floorGlow.addColorStop(1, rgba(HERO_TONES.gray, 0));

  ctx.fillStyle = rightGlow;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = floorGlow;
  ctx.fillRect(0, 0, width, height);
}

function drawHeroDotMatrix(ctx, width, height, time) {
  const spacing = width < 640 ? 30 : 42;
  const startX = width < 640 ? width * 0.1 : width * 0.48;
  const endX = width + spacing;
  const startY = height * 0.12;
  const endY = height * 0.88;
  const drift = (time * 0.006) % spacing;

  ctx.save();
  for (let y = startY; y <= endY; y += spacing) {
    const row = Math.round((y - startY) / spacing);
    const rowShift = row % 2 === 0 ? spacing * 0.5 : 0;

    for (let x = startX - spacing; x <= endX; x += spacing) {
      const px = x + rowShift + drift;
      const wave = Math.sin((px * 0.006) + (y * 0.01) + (time * 0.0006));
      const rightBias = clamp((px - (width * 0.42)) / (width * 0.48), 0, 1);
      const centerFade = 1 - clamp(Math.abs(y - (height * 0.48)) / (height * 0.46), 0, 1);
      const alpha = (0.035 + ((wave + 1) * 0.028)) * rightBias * (0.35 + centerFade);
      const radius = 0.7 + (rightBias * 0.65);

      ctx.fillStyle = rgba(HERO_TONES.gray, alpha);
      ctx.beginPath();
      ctx.arc(px, y + Math.sin((time * 0.0005) + row) * 2, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function drawHeroRail(ctx, width, rail, time) {
  const step = width < 640 ? 26 : 18;
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, rgba(HERO_TONES.line, 0));
  gradient.addColorStop(0.3, rgba(HERO_TONES.line, rail.alpha * 0.4));
  gradient.addColorStop(0.68, rgba(HERO_TONES.ink, rail.alpha));
  gradient.addColorStop(1, rgba(HERO_TONES.line, 0));

  ctx.beginPath();
  for (let x = -80; x <= width + 80; x += step) {
    const y = heroY(x, rail, time);
    if (x === -80) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.strokeStyle = gradient;
  ctx.lineWidth = rail.width;
  ctx.lineCap = 'round';
  ctx.stroke();
}

function drawHeroMarker(ctx, width, height, rail, marker, time) {
  const total = width + 220;
  const travel = ((time * marker.speed) + marker.offset + marker.delay) % 1;
  const x = (travel * total) - 110;
  const y = heroY(x, rail, time);
  const angle = Math.atan2(heroY(x + 8, rail, time) - heroY(x - 8, rail, time), 16);
  const edgeFade = clamp(Math.min(x / 130, (width - x) / 130), 0, 1);
  const verticalFade = clamp(Math.min(y / 100, (height - y) / 100), 0, 1);
  const alpha = edgeFade * verticalFade * 0.46;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.lineCap = 'round';
  ctx.strokeStyle = rgba(HERO_TONES.ink, alpha);
  ctx.lineWidth = marker.width;
  ctx.beginPath();
  ctx.moveTo(-marker.length * 0.5, 0);
  ctx.lineTo(marker.length * 0.5, 0);
  ctx.stroke();
  ctx.restore();
}

function drawHeroPanelLines(ctx, width, height, time) {
  const spacing = width < 640 ? 130 : 170;
  const drift = (time * 0.011) % spacing;

  ctx.save();
  ctx.strokeStyle = rgba(HERO_TONES.soft, 0.38);
  ctx.lineWidth = 1;

  for (let x = -spacing; x <= width + spacing; x += spacing) {
    const px = x + drift;
    ctx.beginPath();
    ctx.moveTo(px, height * 0.04);
    ctx.lineTo(px + (height * 0.16), height * 0.92);
    ctx.stroke();
  }

  ctx.restore();
}

function drawCtaWave(ctx, width, lane, color, alpha, time) {
  const step = width < 640 ? 22 : 16;
  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, rgba(color, 0));
  gradient.addColorStop(0.18, rgba(color, alpha * 0.55));
  gradient.addColorStop(0.5, rgba(color, alpha));
  gradient.addColorStop(0.82, rgba(color, alpha * 0.55));
  gradient.addColorStop(1, rgba(color, 0));

  ctx.beginPath();
  for (let x = -step; x <= width + step; x += step) {
    const y = ctaY(x, lane, time);
    if (x === -step) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }

  ctx.strokeStyle = gradient;
  ctx.lineWidth = lane.width;
  ctx.stroke();
}

function drawCtaDash(ctx, width, lane, index, color, time) {
  const total = width + 180;
  const travel = ((time * lane.dashSpeed) + lane.offset + (index * 0.29)) % 1;
  const x = (travel * total) - 90;
  const y = ctaY(x, lane, time);
  const angle = Math.atan2(ctaY(x + 6, lane, time) - ctaY(x - 6, lane, time), 12);
  const edgeFade = clamp(Math.min(x / 90, (width - x) / 90), 0, 1);
  const length = 12 + (index % 3) * 7;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.lineCap = 'round';
  ctx.strokeStyle = rgba(color, 0.72 * edgeFade);
  ctx.lineWidth = index % 2 === 0 ? 2 : 1.25;
  ctx.beginPath();
  ctx.moveTo(-length * 0.5, 0);
  ctx.lineTo(length * 0.5, 0);
  ctx.stroke();

  if (index % 3 === 0) {
    ctx.fillStyle = rgba(color, 0.85 * edgeFade);
    ctx.beginPath();
    ctx.arc(length * 0.5 + 4, 0, 2.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

export default function MoleculeBackground({ variant = 'hero' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReduced = reducedMotion.matches;
    let rafId = null;
    let resizeTimeout = null;
    let width = 0;
    let height = 0;
    let scene = null;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      scene = variant === 'hero' ? makeHeroScene(width, height) : makeCtaScene(width, height);
    }

    function drawHero(time) {
      ctx.clearRect(0, 0, width, height);
      drawHeroSpotlight(ctx, width, height, time);
      drawHeroPanelLines(ctx, width, height, time);
      drawHeroDotMatrix(ctx, width, height, time);

      scene.rails.forEach((rail) => drawHeroRail(ctx, width, rail, time));
      scene.markers.forEach((marker) => {
        drawHeroMarker(ctx, width, height, scene.rails[marker.rail], marker, time);
      });
    }

    function drawCta(time) {
      const palette = [CTA_COLORS.primary, CTA_COLORS.secondary, CTA_COLORS.accent];
      ctx.clearRect(0, 0, width, height);

      scene.lanes.forEach((lane, index) => {
        const color = palette[lane.hue];
        drawCtaWave(ctx, width, lane, color, 0.28 * (index % 2 === 0 ? 1 : 0.72), time);
      });

      ctx.globalCompositeOperation = 'screen';
      scene.lanes.forEach((lane, index) => {
        const color = index % 4 === 0 ? CTA_COLORS.highlight : palette[lane.hue];
        const dashCount = width < 640 ? 2 : 3;

        for (let dashIndex = 0; dashIndex < dashCount; dashIndex += 1) {
          drawCtaDash(ctx, width, lane, dashIndex, color, time + (index * 180));
        }
      });

      ctx.globalCompositeOperation = 'source-over';
    }

    function draw(time) {
      if (!scene) return;
      const renderTime = prefersReduced ? 2200 : time;
      ctx.globalCompositeOperation = 'source-over';
      if (variant === 'hero') drawHero(renderTime);
      else drawCta(renderTime);
    }

    function tick(time) {
      draw(time);
      if (!prefersReduced) {
        rafId = requestAnimationFrame(tick);
      }
    }

    function handleResize() {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resize();
        draw(performance.now());
      }, 120);
    }

    function handleMotionChange(event) {
      prefersReduced = event.matches;
      cancelAnimationFrame(rafId);
      rafId = null;

      if (prefersReduced) draw(performance.now());
      else rafId = requestAnimationFrame(tick);
    }

    resize();
    rafId = requestAnimationFrame(tick);
    window.addEventListener('resize', handleResize);
    reducedMotion.addEventListener('change', handleMotionChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      reducedMotion.removeEventListener('change', handleMotionChange);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
