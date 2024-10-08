import { useEffect, useState } from "react";

export const useMobile = (breakpoint: number = 1050) => {
  const [mobileMedia, _] = useState<MediaQueryList>(() => window.matchMedia(`(max-width: ${breakpoint}px)`));
  const [matches, setMatches] = useState(mobileMedia.matches);
  useEffect(() => {
    mobileMedia.addEventListener("change", (e: MediaQueryListEvent) => {
     setMatches(e.matches); 
    });
  }, [mobileMedia])

  return matches;
}
