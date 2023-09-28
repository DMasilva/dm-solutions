import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="text-gray-600">

      <Navbar/>
      <Hero/>
      {/* <Login/> */}
     
      <Footer/>
    </div>
  );
}

export default App;
