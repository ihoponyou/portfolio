import PROJECTS from "../projects";
import ProjectCard from "./ProjectCard";

function Home() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {Array.from(Object.entries(PROJECTS)).map((entry) => (
        <ProjectCard
          key={entry[0]}
          title={entry[0]}
          linkTo={entry[1].projectId}
          picturePath={entry[1].imagePaths[0]}
        />
      ))}
    </div>
  );
}

export default Home;
