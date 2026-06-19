import "@/App.css";
import "@/glc.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GLCSite from "@/components/GLCSite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GLCSite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
