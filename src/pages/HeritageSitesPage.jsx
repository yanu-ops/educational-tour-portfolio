import React, { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const heritageSites = [
  {
    id: 1,
    name: "Cebu",
    photos: [
      "/images/Cebu/cebua.jpeg",
      "/images/Cebu/lapulapu.jpeg",
      "/images/Cebu/cebuc.jpeg",
      "/images/Cebu/cebuchurch.jpeg",
      "/images/Cebu/cebu1.jpeg",
      "/images/Cebu/cebug.jpeg",
      "/images/Cebu/cebub.jpeg",
      "/images/Cebu/cebus.jpeg",
      "/images/Cebu/bai.jpeg",
      "/images/Cebu/cebu hotel.jpeg",
    ],
  },
  {
    id: 2,
    name: "Bohol",
    photos: [
      "/images/Bohol/b2.jpeg",
      "/images/Bohol/b3.jpeg",
      "/images/Bohol/b4.jpeg"
    ],
  },
];

const HeritageSitesPage = () => {
  const [photoIndices, setPhotoIndices] = useState(
    heritageSites.map(() => 0)
  );

  const carouselRefs = useRef([]);

  const prevPhoto = (siteIndex) => {
    setPhotoIndices((prev) => {
      const length = heritageSites[siteIndex].photos.length;
      return prev.map((val, i) =>
        i === siteIndex ? (val - 1 + length) % length : val
      );
    });
  };

  const nextPhoto = (siteIndex) => {
    setPhotoIndices((prev) => {
      const length = heritageSites[siteIndex].photos.length;
      return prev.map((val, i) => (i === siteIndex ? (val + 1) % length : val));
    });
  };

  // Always align center photo in the middle
  useEffect(() => {
    heritageSites.forEach((_, siteIndex) => {
      const carousel = carouselRefs.current[siteIndex];
      if (carousel) {
        const child = carousel.children[photoIndices[siteIndex]];
        if (child) {
          const containerWidth = carousel.offsetWidth;
          const childWidth = child.offsetWidth;
          const scrollLeft =
            child.offsetLeft - containerWidth / 2 + childWidth / 2;
          carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
      }
    });
  }, [photoIndices]);

  return (
    <Layout>
      <div className="container mx-auto p-8 flex flex-col items-center space-y-12">
        <h2 className="text-3xl font-bold mb-8">Heritage Sites</h2>

        {heritageSites.map((site, siteIndex) => {
          const currentPhotoIndex = photoIndices[siteIndex];

          return (
            <div
              key={site.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-5xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{site.name}</h3>

              {/* Centered carousel */}
              <div className="relative w-full flex items-center">
                <button
                  onClick={() => prevPhoto(siteIndex)}
                  className="absolute left-0 z-10 bg-white hover:bg-blue-700 hover:text-white rounded-full p-2 shadow transition-colors"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <div
                  ref={(el) => (carouselRefs.current[siteIndex] = el)}
                  className="flex overflow-x-scroll scrollbar-hide gap-4 mx-12 scroll-smooth"
                >
                  {site.photos.map((photo, index) => {
                    const isCenter = index === currentPhotoIndex;
                    return (
                      <img
                        key={index}
                        src={photo}
                        alt={`${site.name} ${index + 1}`}
                        className={`rounded-xl shadow-lg object-cover shrink-0 transition-all duration-300`}
                        style={{
                          width: isCenter ? "400px" : "250px",
                          height: isCenter ? "250px" : "180px",
                          opacity: isCenter ? 1 : 0.5,
                          transform: `scale(${isCenter ? 1 : 0.7})`,
                        }}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={() => nextPhoto(siteIndex)}
                  className="absolute right-0 z-10 bg-white hover:bg-blue-700 hover:text-white rounded-full p-2 shadow transition-colors"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {site.photos.map((_, index) => (
                  <span
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentPhotoIndex
                        ? "bg-blue-700"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default HeritageSitesPage;
