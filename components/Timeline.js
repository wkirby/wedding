import React from "react";
export const Timeline = ({ entries, ...props }) => {
  return (
    <ul className="timeline">
      {entries.map((e, i) => {
        return (
          <li key={i} className="timeline__item">
            <div className="timeline__time">{e.time}</div>

            <div className="timeline__content">
              <div className="timeline__title">{e.label}</div>
              <div className="timeline__description">{e.description}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
