import { useState } from "react";

import "./LoadingIndicator.scss";
import { useInterval } from "usehooks-ts";

export interface LoadingIndicatorProps {
  loadingText?: string;
}

export function LoadingIndicator({ loadingText }: LoadingIndicatorProps) {
  const dotsArr = ["..", "...", "....", "."];
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState(".");

  useInterval(() => {
    setProgress(progress + 1);
    setDots(dotsArr[progress % dotsArr.length]);
  }, 300);
  return (
    <div className="loading-indicator">
      <span className="spinner material-icons">code</span>
      {loadingText && (
        <div className="loading-text">
          {loadingText}
          {dots}
        </div>
      )}
    </div>
  );
}
