import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../Components/MyCard";
import data from "../data";

export default function Home() {
  return (
    <Container className="mt-4">
      <Row className="row-cols-1 row-cols-md-4 g-4 justify-content-center">
        {data.map((item) => (
          <Col key={item.id}>
            <MyCard {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
