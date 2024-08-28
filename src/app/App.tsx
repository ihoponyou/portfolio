import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Project from "../components/Project";
import PROJECTS from "../projects";

export const IMAGES = require.context("../assets/pictures", true);

function App() {
  const projectRoutes: React.ReactElement[] = [];
  for (const [title, data] of PROJECTS) {
    const newProjectRoute =
      <Route
        key={title}
        path={`/${title.trim().replaceAll(/\s+/g, "-")}`}
        element={
          <Project
            title={title}
            data={data}
            imagePaths={IMAGES.keys().map((value) => IMAGES(value))}
          />
        }
      />

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
