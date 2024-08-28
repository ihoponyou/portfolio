import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { ProjectData } from "../projects";
import ImageGallery from "./ImageGallery";
import Section from "./Section";

interface Props {
    title: string,
    data: ProjectData,
    imagePaths: string[],
}

function Project(props: Props) {
    return (
        <Section title={props.title}>
            <div className="row">
                <div className="col-md-6">
                    <ImageGallery
                        images={props.imagePaths}
                    />
                </div>
                <div className="col-md-6">
                    <Markdown>
                        {props.data.description}
                    </Markdown>
                    <ul>
                        {props.data.tags.map((tagName) => <li key={tagName}>{tagName}</li>)}
                    </ul>
                </div>
            </div>
            <Link to="/">Back</Link>
        </Section>
    )
}

export default Project;