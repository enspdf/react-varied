import { Modal, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../../auth/useAuth";

const DeleteModal = ({ isOpen, close }) => {
  const { logout } = useAuth();
  const handleDelete = () => {
    logout();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Delete account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          Are you sure that you want to delete your account?{" "}
          <b>all data will be lost</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete my account
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
