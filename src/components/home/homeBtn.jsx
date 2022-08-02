import React from "react";
import Button from "react-bootstrap/Button";

const HomeBtn = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <Button
        style={{ borderRadius: "2rem", height: "3.5rem" }}
        className="mt-5"
      >
        아기 고래 만나러 가기
      </Button>
    </div>
  );
};

export default HomeBtn;
