import { Modal, ModalBackground, ModalClose, ModalContent } from "bloomer";
import React, { useState } from "react";
import { Portal } from "react-portal";
export const StackImage = ({ src }) => {
  const [active, setActive] = useState(false);
  return (<div className="stack-image">
    <img src={src} style={{ width: "100%" }} onClick={() => setActive(!active)} />
    <Portal>
      <Modal isActive={active}>
        <ModalBackground onClick={() => setActive(!active)} />
        <ModalContent hasTextAlign="centered">
          <img src={src} />
        </ModalContent>
        <ModalClose onClick={() => setActive(!active)} />
      </Modal>
    </Portal>
  </div>);
};
