import React, { useState } from "react";
import { Portal } from "react-portal";
import { Layout } from "../components/Layout";
import StackGrid, { transitions, easings } from "react-stack-grid";
import {
  Container,
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose
} from "bloomer";

const StackImage = ({ src }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="stack-image">
      <img src={src} onClick={() => setActive(!active)} />
      <Portal>
        <Modal isActive={active}>
          <ModalBackground onClick={() => setActive(!active)} />
          <ModalContent hasTextAlign="centered">
            <img src={src} />
          </ModalContent>
          <ModalClose onClick={() => setActive(!active)} />
        </Modal>
      </Portal>
    </div>
  );
};

const transition = transitions.scaleDown;

export default () => {
  return (
    <Layout>
      <Container>
        <StackGrid
          monitorImagesLoaded
          columnWidth={200}
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

          <StackImage src="https://picsum.photos/200/300/?random" />
          <StackImage src="https://picsum.photos/430/400/?random" />
          <StackImage src="https://picsum.photos/200/400/?random" />
          <StackImage src="https://picsum.photos/200/200/?random" />

          <StackImage src="https://picsum.photos/200/300/?random" />
          <StackImage src="https://picsum.photos/400/600/?random" />
          <StackImage src="https://picsum.photos/200/400/?random" />
          <StackImage src="https://picsum.photos/200/200/?random" />
        </StackGrid>
      </Container>
    </Layout>
  );
};
