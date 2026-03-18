import React, { useEffect, useRef } from 'react';

// --- ESTILOS ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    // CAMBIO CLAVE: De 'fixed' a 'absolute' para que scrollee con la página
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  canvas: {
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  centerMask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    background: 'radial-gradient(circle at center, #000000ff 15%, transparent 80%)',
    pointerEvents: 'none',
  }
};

const BackgroundAI: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let w: number;
    let h: number;

    const config = {
      particleCount: window.innerWidth < 768 ? 40 : 80,
      speed: 0.5,
      linkDistance: 140,
      colorDot: 'rgba(0, 210, 255, 0.8)',
      colorLine: 'rgba(138, 43, 226, 0.3)',
      colorShape: 'rgba(138, 43, 226, 0.08)'
    };

    // CAMBIO CLAVE: Ahora toma el tamaño de la sección donde lo pusiste, no de la pantalla completa
    const resizeReset = () => {
      const parent = canvas.parentElement;
      if (parent) {
        w = canvas.width = parent.offsetWidth;
        h = canvas.height = parent.offsetHeight;
      } else {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      }
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * config.speed;
        this.vy = (Math.random() - 0.5) * config.speed;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = config.colorDot;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawDynamicShapes = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.linkDistance) {
            ctx.beginPath();
            const opacity = 1 - dist / config.linkDistance;
            ctx.strokeStyle = config.colorLine.replace('0.3', (opacity * 0.5).toString());
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();

            for (let k = j + 1; k < particles.length; k++) {
              const dx2 = particles[k].x - particles[j].x;
              const dy2 = particles[k].y - particles[j].y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              if (dist2 < config.linkDistance) {
                ctx.beginPath();
                ctx.fillStyle = config.colorShape.replace('0.08', (opacity * 0.15).toString());
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.lineTo(particles[k].x, particles[k].y);
                ctx.closePath();
                ctx.fill();
              }
            }
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      drawDynamicShapes();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeReset();
    initParticles();
    animate();

    const handleResize = () => {
      resizeReset();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={styles.container}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.centerMask} />
    </div>
  );
};

export default BackgroundAI;