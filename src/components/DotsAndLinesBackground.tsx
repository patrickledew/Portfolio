import React, { useEffect, useRef } from "react";

import "./dotsAndLinesBackground.scss";

interface Point {
  x: number;
  y: number;
}

const DotsAndLinesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) {
      const onResize = () => {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", onResize);
      ctx.imageSmoothingEnabled = false;
      onResize();

      let points: Point[] = Array.from({ length: 100 }, () => ({
        x: Math.random() * (ctx.canvas.width ?? 0),
        y: Math.random() * (ctx.canvas.height ?? 0),
      }));

      let vels: Point[] = Array.from({ length: 100 }, () => ({
        x: (Math.random() - 0.2) * 2,
        y: (Math.random() - 0.2) * 2,
      }));

      const dist = (p1: Point, p2: Point): number => {
        const dx = (p1.x % ctx.canvas.width) - (p2.x % ctx.canvas.width);
        const dy = (p1.y % ctx.canvas.height) - (p2.y % ctx.canvas.height);
        const result = Math.sqrt(dx ** 2 + dy ** 2);

        return result;
      };

      const getClosePoint = (p1: Point, pts: Point[]) => {
        let minDist = 200;
        return pts.find((p2) => {
          if (p1 == p2) return false;
          const d = dist(p1, p2);
          if (d < minDist) {
            return true;
          } else {
            return false;
          }
        });
      };

      let handle = 0;

      const draw = () => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "white";
        ctx.strokeStyle = "lightgray";
        ctx.beginPath();

        points.forEach((p1, i, a) => {
          a[i].x += vels[i].x;
          a[i].y += vels[i].y;
          // ctx.fillRect(
          //   (p1.x % ctx.canvas.width) - 1,
          //   (p1.y % ctx.canvas.height) - 1,
          //   2,
          //   2
          // );

          if (i < 1) {
            ctx.moveTo(p1.x % ctx.canvas.width, p1.y % ctx.canvas.height);
            return;
          }

          const p2 = getClosePoint(p1, points);

          if (dist(points[i - 1], p1) < 500)
            ctx.lineTo(p1.x % ctx.canvas.width, p1.y % ctx.canvas.height);
          else ctx.moveTo(p1.x % ctx.canvas.width, p1.y % ctx.canvas.height);
        });
        ctx.closePath();
        ctx.stroke();

        handle = requestAnimationFrame(draw);
      };

      handle = requestAnimationFrame(draw);
      return () => {
        cancelAnimationFrame(handle);
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);
  return <canvas className="dots-and-lines" ref={canvasRef}></canvas>;
};

export default DotsAndLinesBackground;
