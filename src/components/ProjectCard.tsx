import { useState } from "react";
import { Card } from "react-bootstrap";
import Markdown from "react-markdown";

interface Props {
    title: string;
    linkTo: string;
    imagePaths: string[];
    text?: string;
}

function ProjectCard(props: Props) {
    const [index, setIndex] = useState(0);
    console.log(props.imagePaths)
    function incrementIndex() {
        setIndex(index + 1 >= props.imagePaths.length ? 0 : index + 1);
    }

    function decrementIndex() {
        setIndex(index - 1 <= -1 ? props.imagePaths.length - 1 : index - 1);
    }


    return (
        <Card
            key={props.title}
        >
            {/* TODO: scale gallery images properly; crop to fit? */}
            <Card.Img
                src={props.imagePaths[index]}
                alt={`${props.title} thumbnail`}
                onClick={incrementIndex}
                onContextMenu={decrementIndex}
            />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {props.text !== undefined && <Card.Text><Markdown>{props.text}</Markdown></Card.Text>}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;