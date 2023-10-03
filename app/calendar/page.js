"use client";
import React, { useEffect, useState } from "react";
import calend from "/public/assets/images/calend.png";
import Image from "next/image";
import Moment from "react-moment";
import "moment/locale/fr";
import { AiOutlineSearch } from "react-icons/ai";

export default function Calendar() {
  const [calendar, SetCalendar] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch(`https://de-vie.com/processus_E_api/api/calend`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        SetCalendar(data.calend);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(calendar);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="w-full flex items-center justify-center shadow-md bg-[#919192] rounded-lg mt-6 mb-12 ">
        <h3 className="py-24 text-3xl text-white font-medium">
          Calendrier électoral
        </h3>
      </div>
      <div className="flex items-center justify-end">
        <form
          onSubmit={handleSubmit}
          className="flex items-center h-[40px]  rounded-[8px]"
        >
          <input
            type="text"
            placeholder="Chercher un événement"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-[250px] p-[0.4rem] focus:outline-none bg-[#f9fafb] rounded-md border"
          />
          <button type="submit" className="bg-app-blue text-white p-[0.5rem]">
            <AiOutlineSearch size={22} />
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:flex-col gap-6 my-4 max-sm:p-2">
        {calendar
          .filter((calend) =>
            input
              ? calend.titre.toLowerCase().includes(input.toLowerCase())
              : true
          )
          ?.map((calendar) => (
            <div
              key={calendar.id}
              className={`flex items-center gap-4 max-md:w-full bg-white rounded-lg py-4 ${
                calendar.date == "2023-12-01" &&
                calendar.dateFiN == "2023-12-31" &&
                "border-2 border-red-600"
              }`}
            >
              <Image
                src={calend}
                alt="logo"
                width={180}
                className="cover mb-4"
              />
              <div className="p-2">
                <div className="flex items-center text-sm pb-2 text-app-blue font-bold ">
                  <span className="mx-1">Du</span>
                  <Moment locale="fr" format="D MMMM YYYY " withTitle>
                    {calendar.date}
                  </Moment>
                  <span className="mx-1"> au </span>
                  <Moment locale="fr" format="D MMMM YYYY " withTitle>
                    {calendar.dateFiN}
                  </Moment>
                </div>
                <h3 className="text-lg">{calendar.titre}</h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
