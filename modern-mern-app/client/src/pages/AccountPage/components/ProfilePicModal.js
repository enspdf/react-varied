import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import { useAuth } from "../../../auth/useAuth";

const ProfilePicModal = ({ isOpen, close }) => {
  const { updateUser } = useAuth();
  const [fileName, setFileName] = useState("Upload an image");
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const [file] = event.target.files;
    const SIZE_50MB = 50 * 1024 * 1024;
    const isValidSize = file.size < SIZE_50MB;
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name);

    if (!isValidSize) return toast.error("File exceed size, max 50MB");
    if (!isValidType) return toast.error("Only image files");

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleUpdateProfilePic = () => {
    if (!selectedFile)
      return toast.error("You need to select an image to proceed");
    updateUser({ profilePic: selectedFile });
    close();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Change my profile picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.File
            custom
            label={fileName}
            data-browse="Upload"
            onChange={handleFileChange}
            accept=".jpg, .jpeg, .gif, .png"
          />
        </Form>
        <img
          className="img-fluid mt-2"
          src={selectedFile}
          alt="profile-preview"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdateProfilePic}>
          Update image
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilePicModal;
