import { Link } from "react-router-dom";
import { images } from "../app/App";

interface GridCardProps {
  title: string;
  text?: string;
  project_title: string;
}

function GridCard({ title }: GridCardProps) {
  // const thumbnail = importAll(require.context(`../assets/pictures`, false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="col">
      <div className="card">
        <Link to="/rogue-lineage-tycoon">
          <img
            src={require("../assets/pictures/Screenshot 2023-06-03 110401.png")}
            className="card-img-top"
            alt="project thumbnail"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

function Home() {
  console.log(images.keys());
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon"
      />
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon"
      />
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon"
      />
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon"
      />
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon"
      />
    </div>
  );
}

export default Home;
