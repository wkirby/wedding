import { Media, MediaLeft, MediaContent, MediaRight } from "bloomer";
import React from "react";
export const TimelineEntry = ({ src, children, left = true }) => {
  const image = (
    <figure className="image is-256x256">
      <img className="is-rounded" src={src} alt="" />
    </figure>
  );
  const content = (
    <MediaContent className="has-text-centered">
      <span className="is-size-4">{children}</span>
    </MediaContent>
  );
  return (
    <div className="timeline-en">
      <Media className="is-centered">
        {left ? (
          <>
            <MediaLeft>{image}</MediaLeft>
            {content}
          </>
        ) : (
          <>
            {content}
            <MediaRight>{image}</MediaRight>
          </>
        )}
      </Media>
    </div>
  );
};
