import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();
  let location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname);
    }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group as={Row} controlId="searchBox">
        <Col sm="8">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
          ></Form.Control>
        </Col>
        <Col>
          <Button type="submit" variant="outline-success" className="p-2">
            Submit
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SearchBox;
