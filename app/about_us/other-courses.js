"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "../../components/course-card";

const OTHER_COURSES = [
  {
    img: "/assets/images/bruno.jpeg",
    title: "Bruno LWAMBA",
    desc: "Cofounder and Mobile Developer",
  },
  {
    img: "/assets/images/isaac.jpeg",
    title: "ISAAC BELO",
    desc: "Cofounder and Backend Developer",
  },
  {
    img: "/assets/images/caleb.jpeg",
    title: "René Caleb AKASA",
    desc: "Cofounder and Frontend Developper",
  },
  {
    img: "/assets/images/eunice.jpeg",
    title: "Eunice KINZENGELE",
    desc: "Cofounder and Web Master",
  },
  {
    img: "/assets/images/herman.jpeg",
    title: "Herman NGUMBU",
    desc: "Cofounder and Digital Marketer",
  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Notre équipe
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Une équipe passionée au service de l'innovation
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
