import React from "react";
import Layout from "../components/Layout";

const StudentInfoPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8 flex flex-col items-center space-y-12">
        <h2 className="text-3xl font-bold mb-8">Student Information</h2>

        {/* Main info section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
          
          {/* Photo */}
          <div className="shrink-0">
            <img
              src="/images/mahFace.jpeg"
              alt="Student"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Plaza, Ianne Marc C.</h3>
            <p className="text-gray-700 mb-1"><strong>Student ID:</strong> 59834842</p>
            <p className="text-gray-700 mb-1"><strong>Course:</strong> Bachelor of Science in Information Technology</p>
            <p className="text-gray-700 mb-1"><strong>Year:</strong> 3rd Year</p>
            <p className="text-gray-700 mb-1"><strong>Email:</strong> iannemarc.plaza@hcdc.edu.ph</p>
          </div>
        </div>

        {/* Certificate */}
        <div className="w-full max-w-3xl">
          <h4 className="text-xl font-semibold mb-4 text-center">Certificate</h4>
          <img
            src="/images/cert.jpeg" 
            alt="Certificate"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default StudentInfoPage;
