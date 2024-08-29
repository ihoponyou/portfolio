import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { ProjectData } from "../projects";
import ImageGallery from "./ImageGallery";

interface Props {
    title: string,
    data: ProjectData,
    imagePaths: string[],
}

function ProjectPage(props: Props) {
    return (
        <div id={props.title} className="row">
            <h1 className="mb-3">{props.title}</h1>
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
                        {props.data.tags.map(
                            (tagName) => <li key={tagName}>{tagName}</li>
                        )}
                    </ul>
                </div>
            </div>
            <Link to="/">Back</Link>
        </div>
    )
}

export default ProjectPage;