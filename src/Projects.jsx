import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import p1 from "./photos/p1.png";
import p2 from "./photos/p2.png";
import p3 from "./photos/p3.png";
import p4 from "./photos/p4.png";
import p5 from "./photos/p5.png";
import p6 from "./photos/p6.png";
import p7 from "./photos/p7.png";
import p8 from "./photos/p8.png";
import p9 from "./photos/p9.png";

const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Project
        </h2>

        {/* PROJECT CARD */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-slate-700">

          {/* PROJECT TITLE */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Admin Dashboard – Frontend (Project screenshot)
            </h3>
          </div>


          {/* IMAGE SLIDER */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="rounded-xl overflow-hidden h-[300px] md:h-[500px]"
          >

            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-slate-700 rounded-xl">

                  <img
                    src={image}
                    alt={`Project screenshot ${index + 1}`}
                    className="max-w-full max-h-full object-contain rounded-xl"
                  />

                </div>
              </SwiperSlide>
            ))}

          </Swiper>


          {/* LINKS */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/olyha1988/ProductAdminDashBoard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              View Code
            </a>
          </div>


          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            Built a full CRUD-based User Management System using React.js,
            Tailwind CSS, Axios, and Context API with REST APIs for
            authentication and data management.
          </p>


          {/* FEATURES */}
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">

            <li>Reusable components (UserForm, Loader, UserTable)</li>
            <li>Image upload with Multer</li>
            <li>JWT Authentication</li>
            <li>Protected Routes</li>
            <li>Responsive UI using Tailwind CSS</li>
            <li>Dark Mode Support</li>
            <li>REST API CRUD Operations</li>
            <li>Context API State Management</li>

          </ul>


          {/* PURPOSE */}
          <div className="mt-8 p-5 rounded-xl bg-gray-100 dark:bg-slate-700">

            <p className="text-gray-700 dark:text-gray-300">

              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Purpose:
              </span>{" "}

              To build a real-world Admin Dashboard system with complete user
              management, secure authentication, image upload, and REST API
              integration.

            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;