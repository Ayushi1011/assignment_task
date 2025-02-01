import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/DashBoard";
import Activities from "./pages/Activities";
import LocationSelection from "./pages/LocationSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/location" element={<LocationSelection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
