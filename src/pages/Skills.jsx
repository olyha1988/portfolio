import React from "react";

const Skills = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Experience
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD - SKILLS */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li> JavaScript (ES6+)</li>
              <li> React.js</li>
              <li> Tailwind CSS</li>
              <li> Axios & API Integration</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
              <li>MySQL</li>
              <li>Spring / Eclipse (basic knowledge)</li>
              <li>Postman & Trello</li>
            </ul>

          </div>

          {/* RIGHT CARD - EXPERIENCE */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Experience Highlights
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">

              <li>
                ● Developed responsive pages (Users, Add User, Edit User, User Profile)
                with dark mode and mobile-first design principles.
              </li>

              <li>
                ● Improved user experience with loading states, toast notifications,
                form validation, and confirmation dialogs.
              </li>

              <li>
                ● Used Axios interceptors for API request handling and authentication.
              </li>

              <li>
                ● Built reusable components and implemented protected routes with JWT authentication.
              </li>

            </ul>

          </div>

        </div>

        {/* PROJECT SECTION */}
        <div className="mt-12 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700">

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Projects
          </h3>

          <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            Admin Dashboard – Frontend (Internship Mini Project)
          </h4>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            November 2025 – January 2026
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Built a full CRUD-based User Management System using React.js, Tailwind CSS,
            Axios, and Context API with REST APIs for authentication and data management.
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Image upload & form validation</li>
            <li>Protected routes & JWT authentication</li>
            <li>Responsive UI with dark mode</li>
            <li> State management using Context API</li>
            <li>Reusable components (UserForm, Loader, UserTable)</li>
          </ul>

        </div>

      </div>

    </section>
  );
};

export default Skills;