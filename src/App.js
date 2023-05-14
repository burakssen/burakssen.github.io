import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <HashRouter basename="/#">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/gameoflife" element={<Gameoflife/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
