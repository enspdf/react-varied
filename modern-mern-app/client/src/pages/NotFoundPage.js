import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import routes from "../helpers/routes";

const NotFoundPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <img
            style={{ width: "100%" }}
            src="/img/404-not-found.svg"
            alt="error-404"
          />
          <h2>Are you lost?</h2>
          <p>
            Go <Link to={routes.home}>back</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
