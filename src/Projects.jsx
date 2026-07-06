import React from "react";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>

        {/* PROJECT CARD */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-slate-700">

          {/* TITLE + DATE */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Admin Dashboard – Frontend (Internship  Project)
            </h3>

            <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
              May 2026 – June 2026
            </span>

          </div>

          {/* LINKS */}
          <div className="mt-4 flex gap-4">
            
            {/* LIVE DEMO (replace with your Vercel link when ready) */}
            <a
              href="https://your-live-project.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Live Demo
            </a>

            {/* GITHUB CODE */}
            <a
              href="https://github.com/olyha1988/ProductAdminDashBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:underline text-sm"
            >
              View Code
            </a>

          </div>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Built a full CRUD-based User Management System using React.js, Tailwind CSS,
            Axios, and Context API with REST APIs for authentication and data management.
          </p>

          {/* FEATURES */}
          <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Reusable components (UserForm, Loader, UserTable)</li>
            <li>Image upload, form validation, protected routes</li>
            <li>JWT authentication handling</li>
            <li>Responsive UI with dark mode support</li>
            <li>API integration (CRUD operations)</li>
            <li>State management using Context API</li>
          </ul>

          {/* PURPOSE */}
          <div className="mt-6 p-4 rounded-xl bg-gray-100 dark:bg-slate-700">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Purpose:
              </span>{" "}
              To build a real-world Admin Dashboard system with full user management and API integration.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;