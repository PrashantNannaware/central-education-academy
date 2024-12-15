import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Enroll from "./pages/Enroll";
import Schedule from "./pages/Schedule";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;