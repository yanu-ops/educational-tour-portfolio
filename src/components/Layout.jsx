import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 Educational Tour Portfolio
      </footer>
    </div>
  );
};

export default Layout;
