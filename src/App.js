import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-gray-600">
      <Navbar />
      <Routes>
        {/* Route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
