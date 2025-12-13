import React, { useRef, useEffect, useState } from "react";

const Home = () => {
  const cardsRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
  }, []);

  const startExploring = () => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="min-h-screen flex justify-center items-center px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="images/mahFace.jpeg"
              alt="Profile"
              className="w-80 md:w-96 h-auto object-cover rounded-3xl shadow-xl"
            />
          </div>

          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Hey, I'm Ianne!
            </h1>

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Welcome to My Educational Tour Portfolio
            </h3>

            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              This website highlights my journey during our educational tour—
              showcasing my company visits, heritage site discoveries, journal
              reflections, and academic background as a student.
            </p>

            <button
              onClick={startExploring}
              className="px-8 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Start Exploring →
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section
        ref={cardsRef}
        className={`min-h-screen flex flex-col justify-center px-6 py-16 transition-opacity duration-1000 ${
          visibleCards ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
            Explore My Portfolio
        </h2>


        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">

          {/* Companies */}
          <div
            onClick={() => (window.location.href = "/company")}
            className="bg-white p-8 rounded-xl shadow-lg cursor-pointer transform transition hover:-translate-y-1 hover:bg-blue-900 hover:text-white"
          >
            <h3 className="text-xl font-bold mb-2">Companies</h3>
            <p>
              Explore all the companies I visited during the tour and what I learned.
            </p>
          </div>

          {/* Journal */}
          <div
            onClick={() => (window.location.href = "/journal")}
            className="bg-white p-8 rounded-xl shadow-lg cursor-pointer transform transition hover:-translate-y-1 hover:bg-blue-900 hover:text-white"
          >
            <h3 className="text-xl font-bold mb-2">Journal</h3>
            <p>
              Read my reflections, experiences, and insights throughout the journey.
            </p>
          </div>

          {/* Heritage Sites */}
          <div
            onClick={() => (window.location.href = "/heritage")}
            className="bg-white p-8 rounded-xl shadow-lg cursor-pointer transform transition hover:-translate-y-1 hover:bg-blue-900 hover:text-white"
          >
            <h3 className="text-xl font-bold mb-2">Heritage Sites</h3>
            <p>
              Discover the cultural and historical sites I visited during the tour.
            </p>
          </div>

          {/* Student Info */}
          <div
            onClick={() => (window.location.href = "/student-info")}
            className="bg-white p-8 rounded-xl shadow-lg cursor-pointer transform transition hover:-translate-y-1 hover:bg-blue-900 hover:text-white"
          >
            <h3 className="text-xl font-bold mb-2">Student Info</h3>
            <p>
              Learn more about my background, education, and personal achievements.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
