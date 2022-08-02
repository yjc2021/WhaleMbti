import React from "react";
import Card from "react-bootstrap/Card";

const ImgCard = (props) => {
  return (
    <Card
      style={{ width: "100%", height: "50vh" }}
      className="bg-dark text-white"
    >
      <Card.Img src="" alt="Card Image" />

      <Card.ImgOverlay
        style={{
          fontSize: "2rem",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        <Card.Text>나는 어떤 고래일까?</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ImgCard;
