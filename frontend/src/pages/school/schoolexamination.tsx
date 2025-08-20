// src/pages/school/Examination.jsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const sections = [
  {
    title: "Examination Scheme",
    links: [
      { label: "Secondary School Certificate (Class X)", href: "#" },
      { label: "Senior Secondary School Certificate (Class XII)", href: "#" },
    ],
  },
  {
    title: "Examination Forms",
    links: [
      { label: "Examination form for Class (X & XII)", href: "#" },
      { label: "Hall Ticket for Class (X & XII)", href: "#" },
      {
        label:
          "Application for re-evaluation of answer books of AMU Board exams (Class X & XII)",
        href: "#",
      },
    ],
  },
  {
    title: "Examination Results",
    links: [{ label: "Examination Result (Class X & XII)", href: "#" }],
  },
];

const SchoolExamination = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {/* Top bar (subtle) */}
      <div className="h-1 w-full bg-red-800" />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb-like header box */}
        <div className="mx-auto max-w-5xl rounded border border-gray-200 bg-white shadow-sm">
          <div className="border-b bg-gray-100 px-4 py-3 text-sm text-gray-700">
            School Examination
          </div>

          <div className="px-6 py-8">
            {/* Big title with spaced letters (like screenshot) */}
            <h1 className="mb-8 text-3xl font-semibold tracking-[0.35em] text-red-800">
              S C H O O L&nbsp;&nbsp;E X A M I N A T I O N S
            </h1>

            <div className="space-y-8">
              {sections.map((sec) => (
                <div key={sec.title}>
                  <h2 className="mb-3 text-lg font-semibold text-green-700">
                    {sec.title}
                  </h2>

                  <ul className="ml-5 list-disc space-y-2 text-blue-700">
                    {sec.links.map((l) => (
                      <li key={l.label} className="marker:text-gray-700">
                        <a
                          href={l.href}
                          className="underline decoration-blue-700 underline-offset-2 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom padding to mimic roomy layout */}
            <div className="pt-10" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SchoolExamination;
