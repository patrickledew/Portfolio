import p5 from "p5";
import { useEffect, useRef, useState } from "react";

import makeSketch from "../util/boids";

const BoidsComponent = ({ enabled }: { enabled: boolean }) => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const [P5Instance, setP5Instance] = useState<p5>();

  useEffect(() => {
    if (sketchRef.current && enabled && !P5Instance) {
      const sketch = makeSketch(sketchRef.current);
      const p = new p5(sketch);
      setP5Instance(p);
    }
  }, [P5Instance, enabled]);

  useEffect(() => {
    if (!enabled) {
      console.log("pausing");
      console.log(P5Instance);
      P5Instance?.remove();
      setP5Instance(undefined);
      console.log(P5Instance);
    } else {
      console.log("resuming");
      P5Instance?.loop();
    }
  }, [enabled, P5Instance]);

  return enabled && <div id="canvas" ref={sketchRef}></div>;
};

export default BoidsComponent;
