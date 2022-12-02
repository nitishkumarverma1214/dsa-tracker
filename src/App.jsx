import "./App.css";
import Footer from "./scenes/Footer";
import Home from "./scenes/Home";
import Navbar from "./scenes/Navbar";

function App() {
  return (
    <div className="app bg-black h-full grid-rows-[7rem_1fr_5rem] w-full grid text-white">
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
