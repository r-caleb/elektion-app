"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "../../components/background-card";


function Option({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Pourquoi nous choisir ?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Notre arsenal des produits vous offre un meilleur experience utilisateur avec un contenu flexible et intuitif
      </Typography>
     
    </section>
  );
}

export default WhyChooseUs;
