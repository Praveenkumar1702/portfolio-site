import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Praveen Kumar</h1>
          <p className="text-lg text-gray-600 mt-2">
            Software Development Engineer | Guidewire PolicyCenter Expert
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">About Me</h2>
          <p className="text-gray-600 mt-2">
            Experienced in Guidewire PolicyCenter, Java, SQL, and web services integration.
            Passionate about software development, problem-solving, and building scalable applications.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Guidewire PolicyCenter (Configurations, Integrations, Business Rules)</li>
            <li>Java & Gosu Scripting</li>
            <li>SQL & Relational Databases</li>
            <li>API Integration & Web Services</li>
            <li>OOP, Multithreading, Exception Handling</li>
          </ul>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/praveen-kumar-m-6989b6212/" target="_blank" className="flex items-center gap-2 text-blue-600">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/Praveenkumar1702" target="_blank" className="flex items-center gap-2 text-gray-700">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
