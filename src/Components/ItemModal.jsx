import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ItemModal({ show, item, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered size="lg">
      <Modal.Header className="modal-header-gradient">
        <Modal.Title>{item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body-content text-center">
          <img src={item.Image} alt={item.name} className="modal-img" />
          <div className="modal-info mt-3 text-start">
            <p>
              <strong>ID:</strong> {item.id}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {[...Array(item.rating)].map((_, i) => (
                <i
                  key={i}
                  className="bi bi-star-fill"
                  style={{ color: "gold" }}
                ></i>
              ))}
              {/* Nếu muốn hiển thị sao trống cho phần còn lại */}
              {[...Array(5 - item.rating)].map((_, i) => (
                <i key={i} className="bi bi-star" style={{ color: "gold" }}></i>
              ))}{" "}
              ({item.rating})
            </p>
            <p>
              <strong>Special:</strong>{" "}
              {item.isSpecial ? (
                <i className="bi bi-check2" style={{ color: "green" }}></i>
              ) : (
                <i className="bi bi-x" style={{ color: "red" }}></i>
              )}{" "}
              {item.isSpecial ? "Yes" : "No"}
            </p>
            <p>
              <strong>Domestic:</strong> {item.isDomestic ? " Yes" : " No"}
            </p>
            <p>
              <strong>Color:</strong> {item.color}
            </p>
            <p>
              <strong>Likes:</strong> {item.numberOfLikes}
              <i className="bi bi-heart-fill" style={{ color: "red" }}></i>
            </p>
            <p>
              <strong>Origin:</strong> {item.origin}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Love it
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
