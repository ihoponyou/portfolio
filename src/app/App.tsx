import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import ProjectPage from "../components/ProjectPage";
import PROJECTS from "../projects";

// console.log(IMAGES.keys()); // location in project
// console.log(IMAGES.keys().map((value) => IMAGES(value))); // actual location when served
// console.log(IMAGES.keys().filter((path) => path.includes("roblox")))

function App() {
  const projectRoutes: React.ReactElement[] = [];
  for (const [title, data] of Object.entries(PROJECTS)) {
    const newProjectRoute = (
      <Route
        key={title}
        path={`/${data.projectId}`}
        element={
          <ProjectPage title={title} data={data} imagePaths={data.imagePaths} />
        }
      />
    );

    projectRoutes.push(newProjectRoute);
  }

  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={<p className="text-center">Path not resolved</p>}
          />
          {projectRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
