import { useEffect } from "react";
import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useAuth } from "../../../auth/useAuth";
import roles from "../../../helpers/roles";
import editAccountResolver from "../../../validations/editAccountResolver";

const EditModal = ({ isOpen, close, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editAccountResolver });
  const { updateUser, hasRole } = useAuth();
  const isDirty = !!Object.keys(dirtyFields).length;
  const onSubmit = (formData) => {
    if (!isDirty) return;

    let newUserData;

    if (formData.role) {
      newUserData = formData;
    } else {
      const { role, ...restFormData } = formData;
      newUserData = restFormData;
    }

    updateUser(newUserData);
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    }
  }, [user, reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Edit my account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type your name"
              {...register("name")}
            />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Type your email"
              {...register("email")}
            />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control
              disabled={!hasRole(roles.admin)}
              as="select"
              {...register("role")}
            >
              {Object.keys(roles).map((role) => (
                <option key={role}>{role}</option>
              ))}
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty}
        >
          Update my account
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
