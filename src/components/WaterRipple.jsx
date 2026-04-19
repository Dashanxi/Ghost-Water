import { useEffect, useRef } from "react";

export default function WaterRipple() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let ripples = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const createRipple = (x, y) => {
      ripples.push({ x, y, radius: 0, alpha: 0.5 });
    };

    window.addEventListener("mousemove", (e) => {
      createRipple(e.clientX, e.clientY);
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripples.forEach((r, i) => {
        r.radius += 1.5;
        r.alpha -= 0.01;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 200, 255, ${r.alpha})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
}