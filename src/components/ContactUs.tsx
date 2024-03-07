import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-[#cccad3] p-8 text-text-primary">
      <form className="space-y-4">
        <div className="input-group ">
          <div className="grid lg:grid-cols-2 justify-center items-center gap-3">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Your Email.."
                required
              />
            </div>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="countries" className="block mb-2 font-medium">
            Select Subject
          </label>
          <select
            id="subjects"
            className="bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 "
          >
            <option>Select Subject</option>
            <option value="product-issue">PRODUCT ISSUE</option>
            <option value="revalidation">DATA REVALIDATION</option>
          </select>
        </div>
        <div className="input-group">
          <label
            htmlFor="message"
            className="block mb-2 !text-text-primary font-medium "
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder=" Your message..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-color-primary px-3 py-2 text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
