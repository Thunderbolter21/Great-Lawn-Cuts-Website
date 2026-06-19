import "@/App.css";
import "@/glc.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GLCSite from "@/components/GLCSite";
import ServicesPage from "@/components/ServicesPage";
import WorkPage from "@/components/WorkPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GLCSite />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
