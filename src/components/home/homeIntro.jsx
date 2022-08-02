import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomeIntro = (props) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col></Col>
        <Col style={{ textAlign: "center" }} xs={8}>
          바닷속에서 우연히 만난
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ textAlign: "center" }} xs={9}>
          아기 고래가 도움을 청해오는데...
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col style={{ textAlign: "center" }} xs={8}>
          나는 어떻게 해야 할까?
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default HomeIntro;
