import React from "react";
import justice from "/public/assets/images/justice.png";
import Image from "next/image";
import Link from "next/link";
import SkeletonCard from "../../components/SkeletonCard";


export default function Legal() {
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="w-full flex items-center justify-center shadow-md bg-[#919192] rounded-lg mt-6 mb-12 ">
        <h3 className="py-24 text-3xl text-white font-medium">Textes Légaux</h3>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 my-8">
        <div className="flex gap-6 my-8">
          <Link
            href={`/legal-text/J.O. n° spécial du 24 juin 2023_REPARTITION DES SIEGES`}
          >
            <div className="flex flex-col  items-center justify-center  rounded-lg transform transition duration-500 hover:scale-110">
              <div className="shadow-md w-full flex flex-col items-center bg-white">
                <Image
                  src={justice}
                  alt="logo"
                  width={200}
                  className="cover m-4 "
                />
                <p className="pb-1 px-4 text-center font-semibold">
                  J.O. n° spécial du 24 juin 2023_REPARTITION DES SIEGES
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6 my-8">
          <Link href={`/legal-text/LOI ELECTORALE N°22-029 DU 29 JUIN 2022`}>
            <div className="flex flex-col items-center justify-center  rounded-lg transform transition duration-500 hover:scale-110">
              <div className="shadow-md w-full flex flex-col items-center bg-white">
                <Image
                  src={justice}
                  alt="logo"
                  width={200}
                  className="cover m-4 "
                />
                <p className="pb-1 px-4 text-center font-semibold">
                  LOI ELECTORALE N°22-029 DU 29 JUIN 2022
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6 my-8">
          <Link href={`/legal-text/Loi électorale textes coordonnés 2017`}>
            <div className="flex flex-col  items-center justify-center  rounded-lg transform transition duration-500 hover:scale-110">
              <div className="shadow-md w-full flex flex-col items-center bg-white">
                <Image
                  src={justice}
                  alt="logo"
                  width={200}
                  className="cover m-4 "
                />
                <p className="pb-1 px-4 text-center font-semibold">
                  Loi électorale textes coordonnés 2017
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
