import React, { useState } from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  {
    id: "1",
    name: "UP IN IT UP",
    description:
      "CeBU InIT aims to nurture and support technology-based startups, particularly in information and communication technology, creative media, and innovation-driven industries.",
    photos: ["/images/UP/UP1.jpeg", "/images/UP/UP2.jpeg"],
  },
  {
    id: "2",
    name: "Rivan IT Cebu",
    description:
      "Rivan Cyber Institute empowers individuals to enter the IT industry, focusing on cutting-edge skill fields like CyberSecurity, Network Engineering, and DevOps to foster comprehensive skill development.",
    photos: ["/images/rivan/rivan1.jpeg", "/images/rivan/rivan2.jpeg"],
  },
  {
    id: "3",
    name: "DYNATA PHILIPPINES",
    description:
      "The Dynata Platform, an all-in-one solution for insights, activation, and measurement, leverages their robust data, innovative technology and more than 40 years of experience as a pioneer in consumer B2B insights.",
    photos: ["/images/dynata/dynata1.jpeg", "/images/dynata/dynata2.jpeg"],
  },
  {
    id: "4",
    name: "MATA TECHNOLOGIES, INC.",
    description:
      "Mata Technologies is a homegrown provider of virtual tours for real estate in the Philippines.",
    photos: ["/images/mata/mata1.jpeg", "/images/mata/mata2.jpeg"],
  },
  {
    id: "5",
    name: "T.A.R.S.I.E.R 117",
    description:
      "Telephone and Radio System, Integrated Emergency Resoponse, is a an emergency and response and disasters management unit established by the Provincial Government of Bohol.",
    photos: ["/images/tr/tr1.jpeg", "/images/tr/tr2.jpeg"],
  },
];

const CompanyPage = () => {
  const [activeId, setActiveId] = useState(null);
  const activeCompany = companies.find((c) => c.id === activeId);

  return (
    <Layout>
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-center">Companies Visited</h1>

        {/* Cards */}
        <div className="flex flex-col items-center gap-6 w-full">
          {companies.map((company) => (
            <motion.div
              key={company.id}
              onClick={() => setActiveId(company.id)}
              className="cursor-pointer rounded-xl shadow-md p-6
                         flex items-center justify-center text-center
                         transition-colors duration-300"
              style={{ width: "45%", minWidth: "300px", height: "120px" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                backgroundColor: "#1E3A8A", // Tailwind blue-800
                color: "#ffffff", // text white
              }}
              layout
              layoutId={company.id} // must match expanded card
            >
              <h2 className="text-xl font-semibold truncate">{company.name}</h2>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {activeCompany && (
            <>
              {/* Dim background */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                onClick={() => setActiveId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
              />

              {/* Expanded card */}
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-xl shadow-xl p-8 relative max-w-5xl w-full mx-4"
                  layoutId={activeCompany.id}
                >
                  <button
                    onClick={() => setActiveId(null)}
                    className="absolute top-4 right-4 text-blue-600 hover:underline text-lg"
                  >
                    ✕
                  </button>

                  <h2 className="text-4xl font-bold mb-6">{activeCompany.name}</h2>
                  <p className="text-lg mb-10">{activeCompany.description}</p>

                  {activeCompany.photos.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {activeCompany.photos.map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`${activeCompany.name} ${index + 1}`}
                          className="rounded-xl shadow-lg"
                        />
                      ))}
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

export default CompanyPage;
