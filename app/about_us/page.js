import React from "react";
import OnlineCourse from "./online-course";
import WhyChooseUs from "./why-choose-us";
import OtherCourses from "./other-courses";

export default function About() {
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="w-full flex items-center justify-center shadow-md bg-[#919192] rounded-lg mt-6 mb-12 ">
        <h3 className="py-24 text-3xl text-white font-medium">
          A propos de nous
        </h3>
      </div>

      <OnlineCourse />
      <WhyChooseUs />
      <OtherCourses />
      <div className="my-4 mx-auto">
        <h2 id="contact">Pour nous contactez, laissez votre message...</h2>
        <div className="flex items-center w-full justify-center">
          <div className="mx-auto w-2/5 max-md:w-4/5">
            <form>
              <div className="mb-2 flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  className="my-4 bg-[#f6f6f6] p-4 rounded-md"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  className="my-4 bg-[#f6f6f6] p-4 rounded-md"
                  placeholder="john.doe@email.com"
                  type="email"
                />
              </div>
              <div className="mb-2 flex flex-col">
                <label htmlFor="message" className="form-label">
                  Votre préoccupation <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="my-4 bg-[#f6f6f6] p-4 rounded-md"
                  placeholder="Message goes here..."
                  rows={8}
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-app-blue py-3 px-12 text-white rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
