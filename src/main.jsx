import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Blogs from "./pages/Blogs.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
