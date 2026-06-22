import { useNavigate } from "react-router-dom";
import p1 from "../assets/p1.jpg"

const Home=()=>{

  const navigate = useNavigate();
return(

    <div className="w-full bg-slate-200">
  
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center ">



 {/* left */}
        <div>
          <img
            src={p1}
            alt="Good Image"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
        {/* light */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Front-end developer
          </h1>

          <p className="text-gray-600 text-lg mb-6">
           I design and develop modern web applications with React, focusing on clean code,
            performance, and exceptional user experiences. 
            Explore my projects and discover how I can help bring your ideas to life.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300 cursor-pointer"
          >
            Contact me
          </button>
        </div>

       
      </section>  
    </div>
)


}
export default Home;