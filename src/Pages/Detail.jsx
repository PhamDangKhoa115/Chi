import React from "react";
import { useParams } from "react-router";
import data from "../data";
import { Container } from "react-bootstrap";

export default function Detail() {
  const { id } = useParams();
  const car = data.find((item) => item.id === id);

  if (!car) return <h2 className="text-center mt-5">Car not found</h2>;

  return (
    <Container className="mt-4">
      <h1>{car.name}</h1>
      <img src={car.Image} alt={car.name} className="img-fluid mb-3" />
      <p>
        <strong>ID:</strong> {car.id}
      </p>
      <p>
        <strong>Category:</strong> {car.category}
      </p>
      <p>
        <strong>Color:</strong> {car.color}
      </p>
      <p>
        <strong>Origin:</strong> {car.origin}
      </p>
      <p>
        <strong>Top Speed:</strong> {car.topSpeed}
      </p>
      <p>
        <strong>Price:</strong> {car.price}
      </p>
      <p>
        <strong>Rating:</strong>{" "}
        <i className="bi bi-star-fill" style={{ color: "gold" }}></i>{" "}
        {car.rating}
      </p>
      <p>
        <strong>Likes:</strong>{" "}
        <i className="bi bi-heart-fill" style={{ color: "red" }}></i>{" "}
        {car.numberOfLikes}
      </p>
    </Container>
  );
}
