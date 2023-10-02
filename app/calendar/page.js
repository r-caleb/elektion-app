import React from "react";
import calend from "/public/assets/images/calend.png";
import Image from "next/image";

export default function Calendar() {
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 px-16">
      <div className="w-full flex items-center justify-center shadow-md bg-[#919192] rounded-lg mt-6 mb-12 ">
        <h3 className="py-24 text-3xl text-white font-medium">
          Calendrier électoral
        </h3>
      </div>
      <div className="flex flex-wrap justify-evenly gap-16 p-6">
        <div className="flex items-center gap-4 w-2/5  bg-white rounded-lg py-4">
          <Image src={calend} alt="logo" width={180} className="cover mb-4" />
          <div className="p-2">
            <p className="text-sm pb-2 text-app-blue font-bold ">
              Du 1 novembre, 2023 Au 31 décembre, 2023
            </p>
            <h3 className="text-lg">Campagne électorale</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 w-2/5 bg-white rounded-lg py-4">
          <Image src={calend} alt="logo" width={180} className="cover mb-4" />
          <div className="p-2">
            <p className="text-sm pb-2 text-app-blue font-bold ">
              Du 1 juillet, 2023 Au 31 août, 2023
            </p>
            <h3 className="text-lg">
              Repérage des centres de vote et bureaux de vote et dépouillement
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4 w-2/5 bg-white rounded-lg py-4">
          <Image src={calend} alt="logo" width={180} className="cover mb-4" />
          <div className="p-2">
            <p className="text-sm pb-2 text-app-blue font-bold ">
              Du 1 juillet, 2023 Au 31 août, 2023
            </p>
            <h3 className="text-lg">
              Repérage des centres de vote et bureaux de vote et dépouillement
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-4 w-2/5 bg-white rounded-lg py-4">
          <Image src={calend} alt="logo" width={180} className="cover mb-4" />
          <div className="p-2">
            <p className="text-sm pb-2 text-app-blue font-bold ">
              Du 1 juillet, 2023 Au 31 août, 2023
            </p>
            <h3 className="text-lg">
              Repérage des centres de vote et bureaux de vote et dépouillement
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
