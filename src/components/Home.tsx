import { Link } from "react-router-dom";
import PROJECTS from "../projects";

interface GridCardProps {
  title: string;
  linkTo: string;
  text?: string;
}

function GridCard(props: GridCardProps) {
  return (
    <div className="col">
      <div className="card">
        <Link to={props.linkTo}>
          <img
            src={require("../assets/pictures/Screenshot 2023-06-03 110401.png")}
            className="card-img-top"
            alt="project thumbnail"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {Array.from(PROJECTS.keys()).map((title) => <GridCard
        key={title}
        title={title}
        linkTo={title.trim().replaceAll(/\s+/g, "-")}
      />)}
    </div>
  );
}

export default Home;
