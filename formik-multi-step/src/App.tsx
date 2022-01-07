import { useState } from "react";
import Button from "react-bootstrap/Button";

import "./App.css";
import ModalSteps from "./components/ModalSteps";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal((prevShowModal) => !prevShowModal);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary" onClick={handleShowModal}>
          Open Modal
        </Button>
        {showModal && <ModalSteps show={showModal} hide={handleShowModal} />}
      </header>
    </div>
  );
}

export default App;
