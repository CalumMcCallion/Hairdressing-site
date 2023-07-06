import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://www.atelierhair.co/blogs/atelier-blog";
    window.location.href = url;
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              <img
                src="https://www.atelierhair.co/cdn/shop/files/Untitled_design-4.png?v=1687010851&width=500"
                alt="atelier"
              />
              <br></br>Checkout the blog from Atelier{" "}
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <button type="submit">Check it out!</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
