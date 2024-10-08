import p5 from "p5";
import { useEffect, useRef, useState } from "react";

import makeSketch from "../util/boids";

const BoidsComponent = ({ enabled }: { enabled: boolean }) => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [P5Instance, setP5Instance] = useState<p5>();


  // setup handler for screen size change
  const setupSketch = () => {
    if (sketchRef.current && enabled && !P5Instance) {
      const sketch = makeSketch(sketchRef.current);
      const p = new p5(sketch);
      setP5Instance(p);
    }
  }

  useEffect(() => {
    if (!P5Instance) {
      setupSketch();
    }
  }, []);

  useEffect(() => {
    if (!enabled) {
      P5Instance?.remove();
      setP5Instance(undefined);
    } else {
      setupSketch();
    }

  }, [enabled, P5Instance]);

  return enabled && <div id="canvas" ref={sketchRef}></div>;
};

export default BoidsComponent;
