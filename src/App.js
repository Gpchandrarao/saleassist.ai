import "./App.css";
import Header from "./components/Headers/Header";
import { Route, Routes } from "react-router-dom";
import Jewelery from "./pages/Jewellery/Jewelery";
import Gifting from "./pages/Gifting/Gifting";
import MenClothing from "./pages/MenClothing/MenClothing";
import Women from "./pages/Women/Women";
import Electronics from "./pages/Electronics/Electronics";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MenClothing />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/gifting" element={<Gifting />} />
        <Route path="/jewelery" element={<Jewelery />} />
      </Routes>
    </div>
  );
}

export default App;
