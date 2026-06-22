import { Routes,Route} from "react-router-dom";
import './App.css'
import Nav from "./component/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./Projects";
import Skills from "./pages/Skills";
function App() {


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* HEADER (already includes navigation) */}
      <Nav />

      {/* PAGE CONTENT */}
      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </div>
  );
}

export default App
