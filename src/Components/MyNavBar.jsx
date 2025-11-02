import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import useTheme from "../Hooks/useTheme.jsx";
import { Link } from "react-router";
export default function MyNavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      expand="lg"
      className="py-3 shadow-sm"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(90deg, #0d6efd, #6f42c1)"
            : "linear-gradient(90deg, #141824, #1f2230)",
        transition: "background 0.4s ease",
      }}
    >
      <Container>
        <Navbar.Brand
          className={`fw-bold fs-4 ${
            theme === "light" ? "text-light" : "text-white-50"
          }`}
        >
          <i className="bi bi-gem me-2"></i> EV Showroom
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto gap-3">
            <Nav.Link
              className={`${
                theme === "light" ? "text-light" : "text-white-50"
              }`}
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${
                theme === "light" ? "text-light" : "text-white-50"
              }`}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${
                theme === "light" ? "text-light" : "text-white-50"
              }`}
              as={Link}
              to="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
          <button
            onClick={toggleTheme}
            className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px", fontSize: "1.4rem" }}
          >
            {theme === "light" ? (
              <i className="bi bi-moon-stars-fill"></i>
            ) : (
              <i className="bi bi-sun-fill text-warning"></i>
            )}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
