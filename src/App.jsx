import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import Contact from './components/Contact';
import { StarsCanvas } from './components/canvas';


const App = () => {
  const cursorId = "glowing-cursor";

  const handleMouseMove = (e) => {
      const cursor = document.getElementById(cursorId);
      if (cursor) {
          cursor.style.left = e.clientX + "px";
          cursor.style.top = e.clientY + "px";
      }
  };

  useEffect(() => {
      const cursorElement = document.createElement("div");
      cursorElement.id = cursorId;
      cursorElement.className = "glowing-cursor";
      document.body.appendChild(cursorElement);

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
          document.body.removeChild(cursorElement);
          window.removeEventListener("mousemove", handleMouseMove);
      };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Define other routes here if needed */}
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
