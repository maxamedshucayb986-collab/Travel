import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Customer from "./Pages/Customer";
// import Admin from "./Pages/Admin";

function App() {
  return (
    <div className="bg-white">
      <Header />

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/customer" element={<Customer />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;