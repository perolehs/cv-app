import "./App.css";
import { BasicCV } from "./templates/basic-cv.tsx";
import cv from "./assets/cv.json";

function App() {
  return (
    <>
      <BasicCV {...cv} />
    </>
  );
}

export default App;
