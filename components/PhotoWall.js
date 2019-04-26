import React from "react";
import StackGrid, { easings } from "react-stack-grid";
import { transition } from "../pages/index";
import { StackImage } from "./StackImage";
export const PhotoWall = ({ photos, ...props }) => {
  return (
    <StackGrid
      {...photos}
      monitorImagesLoaded
      columnWidth={"20%"}
      duration={600}
      gutterWidth={10}
      gutterHeight={10}
      easing={easings.cubicOut}
      appearDelay={60}
      appear={transition.appear}
      appeared={transition.appeared}
      enter={transition.enter}
      entered={transition.entered}
      leaved={transition.leaved}
    >
      <StackImage src="https://picsum.photos/200/300/?random" />
      <StackImage src="https://picsum.photos/400/600/?random" />
      <StackImage src="https://picsum.photos/200/400/?random" />
      <StackImage src="https://picsum.photos/200/200/?random" />

      <StackImage src="https://picsum.photos/200/300/?random" />
      <StackImage src="https://picsum.photos/400/600/?random" />
      <StackImage src="https://picsum.photos/200/400/?random" />
      <StackImage src="https://picsum.photos/200/200/?random" />

      <StackImage src="https://picsum.photos/800/300/?random" />
      <StackImage src="https://picsum.photos/600/600/?random" />
      <StackImage src="https://picsum.photos/300/400/?random" />
      <StackImage src="https://picsum.photos/250/200/?random" />

      <StackImage src="https://picsum.photos/200/300/?random" />
      <StackImage src="https://picsum.photos/430/600/?random" />
      <StackImage src="https://picsum.photos/220/400/?random" />
      <StackImage src="https://picsum.photos/210/200/?random" />
    </StackGrid>
  );
};
