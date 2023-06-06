import { Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import Project_baekjoonbomb from "./routes/project_baekjoonbomb";
import Project_myyummylunch from "./routes/project_myyummylunch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/project_baekjoonbomb" element={<Project_baekjoonbomb />} />
      <Route path="/project_myyummylunch" element={<Project_myyummylunch />} />
    </Routes>
  );
}
export default App;
