import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  linkTo: string;
  text?: string;
  picturePath?: string;
}

function ProjectCard(props: Props) {
  return (
    <Card key={props.title}>
      <Link to={props.title.trim().replaceAll(/\s+/g, "-")}>
        <Card.Img
          src={
            props.picturePath ??
            require("../assets/images/rogue-lineage-tycoon/Screenshot 2023-06-10 113831.png")
          }
          alt={`${props.title} thumbnail`}
        />
      </Link>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.text !== undefined && <Card.Text>{props.text}</Card.Text>}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
