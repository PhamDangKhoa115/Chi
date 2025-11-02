import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

export default function MyCard({ id, name, Image, rating, numberOfLikes }) {
  const navigate = useNavigate();

  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={Image}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span>
            <i className="bi bi-star-fill" style={{ color: "gold" }}></i>{" "}
            {rating}
          </span>
          <br />
          <span>
            <i className="bi bi-heart-fill" style={{ color: "red" }}></i>{" "}
            {numberOfLikes}
          </span>
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/detail/${id}`)}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}
