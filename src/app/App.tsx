import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";
import Section from "../components/Section";

export const images = require.context("../assets/pictures", true);

function App() {
  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/rogue-lineage-tycoon"
            element={
              <Section title="rogue lineage tycoon">
                <div className="row">
                  <div className="col-md-6">
                    <ImageGallery
                      images={images.keys().map((key) => images(key))}
                    />
                  </div>
                  <div className="col-md-6">asdfjnasdf</div>
                </div>
                <Link to="/">Back</Link>
              </Section>
            }
          />
          <Route
            path="*"
            element={<p className="text-center">Path not resolved</p>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
