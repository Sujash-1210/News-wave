import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Newswave. All rights reserved.
        </p>
        <p className="mb-0">
          <a
            href="/privacy-policy"
            className="text-gray-100 hover:text-gray-300"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms-of-service"
            className="text-gray-100 hover:text-gray-300 mx-2"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
