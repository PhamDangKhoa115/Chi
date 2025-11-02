import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "./MyCard.jsx";

export default function CardGrid({ cards, onCardClick }) {
  return (
    <Row className="row-cols-1 row-cols-md-4 gx-5 gy-4">
      {cards.map((item) => (
        <Col key={item.id}>
          <MyCard
            id={item.id}
            name={item.name}
            Image={item.Image}
            onClick={() => onCardClick(item)}
          />
        </Col>
      ))}
    </Row>
  );
}
