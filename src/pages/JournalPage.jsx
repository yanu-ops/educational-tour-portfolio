import React, { useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const journals = [
  {
    id: "1",
    title: "UP IN IT UP",
    date: "2025-09-12",
    facilitators: "Mr. Jason Nieve",
    description:
      "Reflections during the educational tour about startups in UP IN IT UP.",
    photo: "/images/UP/upj.jpeg",
  },
  {
    id: "2",
    title: "Rivan IT Cebu",
    date: "2025-09-13",
    facilitators: "Mr. Jason Nieva",
    description:
      "Reflections and key insights from visiting Rivan IT Cebu, focusing on IT skills and industry exposure.",
    photo: "/images/rivan/rivanj.jpeg",
  },
  {
    id: "3",
    title: "DYNATA",
    date: "2025-09-13",
    facilitators: "Mr. Anton Diego H. Lim",
    description:
      "Documenting my experience and notes from the Dynata Philippines tour, including data insights and analytics.",
    photo: "/images/dynata/dynataj.jpeg",
  },
  {
    id: "4",
    title: "MATA TECHNOLOGIES",
    date: "2025-09-14",
    facilitators: "Ms. Suzzette Minero/ Snow / Mr. Jeff Yongco",
    description: "Insights into the creative minds of virtual maps",
    photo: "/images/mata/mataj.jpeg",
  },
  {
    id: "5",
    title: "Educational Tour Journal 3",
    date: "2025-09-15",
    facilitators: "Sir Darwin Bernasor",
    description: "My learning and observations to the unit of TARSIER 117.",
    photo: "/images/tr/trj.jpeg",
  },
];

const JournalPage = () => {
  const [activeId, setActiveId] = useState(null);
  const activeJournal = journals.find((j) => j.id === activeId);

  return (
    <Layout>
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">My Journal Entries</h1>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6 w-full">
          {journals.map((journal) => (
            <motion.div
              key={journal.id}
              onClick={() => setActiveId(journal.id)}
              className="cursor-pointer rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-colors duration-300"
              style={{ width: "50%", minWidth: "300px", height: "140px" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                backgroundColor: "#1E3A8A",
                color: "#ffffff",
              }}
              layout
              layoutId={journal.id}
            >
              <h2 className="text-xl font-semibold truncate">{journal.title}</h2>
              <p className="text-sm mt-2">{journal.date}</p>
              <p className="text-sm mt-1">{journal.facilitators}</p>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {activeJournal && (
            <>
              {/* Dim background */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setActiveId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
              />

              {/* Expanded card */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-2xl p-8 relative w-full max-w-[60%] mx-auto"
                  layoutId={activeJournal.id}
                  initial={{ scale: 0.7 }}
                  animate={{ scale: 0.85 }}
                  exit={{ scale: 0.7 }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveId(null)}
                    className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 text-lg font-bold"
                  >
                    ✕
                  </button>

                  <h2 className="text-3xl font-bold mb-4">{activeJournal.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    <strong>Date:</strong> {activeJournal.date}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    <strong>Facilitators:</strong> {activeJournal.facilitators}
                  </p>
                  <p className="text-lg mb-6">{activeJournal.description}</p>

                  {activeJournal.photo && (
                    <div className="flex justify-center">
                      <img
                        src={activeJournal.photo}
                        alt={activeJournal.title}
                        className="rounded-xl shadow-lg w-full h-auto max-h-[70vh] object-contain"
                      />
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default JournalPage;
