import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            copyrights &copy; {new Date().getFullYear()} proShop
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
