"use client";

import React from "react";
import Image from "next/image";
import about from "/public/assets/images/about.jpg";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../../components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Transparence",
    description:
      "Sans parti pris nous vous offrons une information parfaite et gratuite",
  },
  {
    icon: AcademicCapIcon,
    title: "Qualité",
    description:
      "Vous avez des informations concises avec un contenu riche en qualité",
  },
  {
    icon: CheckBadgeIcon,
    title: "Rapidité",
    description: "Vous avez les précieuses actualités au moment qu'il faut",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src={about}
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Qui sommes-nous ?
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0 "
          >
            Nous sommes une structure créée par des jeunes talentueux et ambitieux dans le domaine du numérique, ELEKTION APP a pour but d'apporter de la transparence dans le processus électoral. Les informations et ressources misent à la disposition du public, permettront à ce dernier de rester informer avant, pendant et après les élections.   
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
           Nos Valeurs
          </Typography>
          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
