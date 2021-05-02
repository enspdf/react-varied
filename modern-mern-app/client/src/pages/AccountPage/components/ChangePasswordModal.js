import { useEffect } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import changePasswordResolver from "../../../validations/changePasswordResolver";

const ChangePasswordModal = ({ isOpen, close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePasswordResolver });
  const onSubmit = (formData) => {};

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Change password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>New password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Type a new password"
              {...register("password")}
            />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Update password
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ChangePasswordModal;
