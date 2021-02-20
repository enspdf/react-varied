import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

const SuperModal = ({ renderTrigger, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {renderTrigger && renderTrigger({ setIsVisible })}
      <Modal
        {...props}
        title="Basic Modal"
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
      >
        <p>Some sttuff</p>
        <p>Some sttuff</p>
        <p>Some sttuff</p>
      </Modal>
    </>
  );
};

export default SuperModal;
