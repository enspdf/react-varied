import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import routes from "../helpers/routes";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h2>Welcome to Tasks Manager</h2>
          <p>Here you can manage you projects!</p>
          <p>Mark your tasks as completed, add, delete or update.</p>
          <div>
            <Link to={routes.login}>Login</Link> or{" "}
            <Button className="ml-1" as={Link} to={routes.register}>
              Create an account
            </Button>
          </div>
        </Col>
        <Col>
          <img
            className="img-fluid"
            src="/img/task-manager.svg"
            alt="tasks-manager"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
