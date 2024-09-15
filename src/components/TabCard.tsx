import { ReactNode, useEffect, useState } from "react";
import "./TabCard.scss";

export interface Tab {
  title: string;
  content: ReactNode;
}

export interface TabCardProps {
  tabs: Tab[];
}

const TabCard = ({ tabs }: TabCardProps) => {
  const [tab, setTab] = useState(0);

  const tabWidthPercent = 100 / tabs.length;
  const hash = window.location.hash;

  useEffect(() => {
    if (hash == "#blog") {
      setTab(2);
    }
  }, [hash]);

  return (
    <div className="pane nopad">
      <div className="tabs">
        {tabs.map((t, i) => (
          <div
            className={`tab${tab == i ? " active" : ""}`}
            onClick={() => setTab(i)}
          >
            {t.title}
          </div>
        ))}
        <div
          className="tab-highlight"
          style={{
            width: `${tabWidthPercent}%`,
            left: `${tabWidthPercent * tab}%`,
          }}
        ></div>
      </div>
      <div className="tab-content">{tabs[tab].content}</div>
    </div>
  );
};

export default TabCard;
