import { IMAGES } from "../app/App";
import PROJECTS from "../projects";
import ProjectCard from "./ProjectCard";

function Home() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {Array.from(Object.entries(PROJECTS)).map(
        ([title, data]) => <ProjectCard
          key={title}
          title={title}
          linkTo={title.trim().replaceAll(/\s+/g, "-")}
          text={data.description}
          imagePaths={IMAGES.keys()
            .filter((path) => path.includes(title.trim().replaceAll(/\s+/g, "-")))
            .map((value) => IMAGES(value))}
        />
      )}
    </div>
  )
}

export default Home;
