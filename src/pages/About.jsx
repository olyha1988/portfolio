import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center py-16 px-6">

      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-12">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          About Me
        </h2>

        {/* CONTENT */}
        <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-4">
          I'm Olivier, a Frontend React Developer passionate about building modern,
          responsive, and user-friendly web applications.
          <br /><br />

          I have hands-on experience developing an Admin Dashboard using React.js,
          Tailwind CSS, Context API, and Axios. My work includes integrating RESTful APIs,
          implementing authentication and authorization, and building reusable components
          such as forms, tables, loaders, and protected routes.
          <br /><br />

          I am experienced in developing full CRUD applications with image upload functionality,
          form validation, and real-time user feedback. I enjoy applying modern frontend practices
          such as responsive design, API integration, and state management to create scalable and
          efficient web solutions.
          <br /><br />

          I am continuously improving my skills through real-world projects and enjoy turning ideas
          into clean, functional, and engaging user experiences. I am fluent in both English and French.
        </p>

      </div>

    </section>
  );
};

export default About;