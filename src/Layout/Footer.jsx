import React from "react";

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-4 mt-8 text-center text-gray-500 text-sm">
    <span>
      &copy; {new Date().getFullYear()} GrubCart &mdash; Made with <span className="text-green-500">&#10084;&#65039;</span> for food lovers.
    </span>
  </footer>
);

export default Footer; 