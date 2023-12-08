import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cardList.css";

interface cards {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
  isPinned: boolean;
}
interface dataInterface {
  data: cards[];
  onClick: any;
}

const CardList: FC<dataInterface> = (props) => {
  return (
    <>
      {props.data.map((cardData: cards, cardIndex: number) => {
        return (
          <Card style={{ width: "18rem" }} key={cardIndex}>
            <Card.Img
              variant="top"
              src={cardData.image}
              style={{ height: "150px", overflow: "hidden" }}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>{cardData.title}</Card.Title>
              <Card.Text>{cardData.description}</Card.Text>
              <Button variant="primary" href={cardData.link}>
                <i className="bi bi-github"></i> GitHub
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  props.onClick(cardIndex);
                }}
                style={{ marginLeft: "10px" }}
              >
                {cardData.isPinned ? `Pinned` : `Pin`}{" "}
                <i
                  className={`bi bi-pin-angle${
                    cardData.isPinned ? "-fill" : ""
                  }`}
                ></i>
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default CardList;
