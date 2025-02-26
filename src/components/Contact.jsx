import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Simulate a delay and navigate back to news articles
    setTimeout(() => {
      navigate("/");
    }, 2000); // Show thank you message for 2 seconds, then navigate
  };

  return (
    <div className="container mx-auto p-6 min-h-[80vh] flex justify-center items-center">
      {formSubmitted ? (
        <div className="text-center">
          <h2 className="text-2xl text-green-600">
            Thank you for your message!
          </h2>
          <p className="mt-4 text-green-600">Redirecting to the Home Page</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto p-4 bg-white shadow-2xl rounded-lg sm:max-w-sm"
        >
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white px-4 py-2 rounded w-full text-center hover:bg-gray-600"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
