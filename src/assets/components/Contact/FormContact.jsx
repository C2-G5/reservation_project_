import TypeofContact from "./TypeofContact";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FormContact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="">
        <div className="w-full flex justify-evenly lg:flex-row md:flex-col shadow ">
          <div className="bg-[#619bb6] ">
            <TypeofContact />
          </div>
          <div
            className="py-8 lg:py-16 m-5 px-5 max-w-screen-md shadow-[#b5c1c7] border-[#465f6b] border shadow rounded-xl"
            data-aos="zoom-in-up"
          >
            <h2 className="formHeader mb-4 text-4xl font-bold text-center  text-black">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-8 font-light text-center text-black sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5  placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact_subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-500 focus:border-gray-500   placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="contact_message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-500 focus:border-gray-500   placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center hover: rounded-lg hover:bg-[#5aa1c2] sm:w-fit  border-2 border-[#5aa1c2] focus:ring-4 focus:outline-none focus:ring-[#4f7a87] bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormContact;