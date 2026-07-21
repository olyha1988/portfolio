import { useNavigate } from "react-router-dom";
import p1 from "../assets/p1.jpg";
import cv from "../assets/cv.pdf";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-slate-200">
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div>
          <img
            src={p1}
            alt="Profile"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

        {/* Right */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Front-end Developer
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            I design and develop modern web applications with React,
            focusing on clean code, performance, and exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Contact Me
            </button>

            <a
              href={cv}
              download="CV.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/olivier-havyarimana/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;