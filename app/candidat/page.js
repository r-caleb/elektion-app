"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

const keywords = [
  "Tout",
  "Presidentielle",
  "Legislatif National",
  "Legislatif Provincial",
];

export default function Candidat() {
  const [activeElement, setActiveElement] = useState("Tout");
  const [candidats, setCandidat] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = () => {
    fetch(
      "https://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search="
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = (value) => {
    setActiveElement(value);
  };
  const candidates = candidats.filter((candidat) =>
    activeElement !== "Tout" ? candidat.scrutin === activeElement : true
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="bg-white p-3 max-sm:p-1 my-6 shadow-md">
        <div className="flex justify-between max-sm:flex-col-reverse items-center mt-8 mb-2 p-2">
          {" "}
          <div>
            <div className="py-[0.5rem] flex flex-wrap]">
              {keywords.map((value, i) => (
                <span
                  onClick={() => handleClick(value)}
                  key={i}
                  className={`mr-[1rem] max-sm:mr-[0.4rem] max-sm:p-[0.3rem] p-[0.5rem] text-sm border border-[#d2d4d8] bg-[#f9fafb] cursor-pointer rounded-md hover:bg-app-gray hover:text-white ${
                    activeElement === value ? "active" : ""
                  }`}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-[50px]  rounded-[8px]"
          >
            <input
              type="text"
              placeholder="Chercher un candidat"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[250px] p-[0.4rem] focus:outline-none bg-[#f9fafb] rounded-md border"
            />
            <button type="submit" className="bg-app-blue text-white p-[0.5rem]">
              <AiOutlineSearch size={22} />
            </button>
          </form>
        </div>
        <hr />
      </div>
      <div className="flex gap-12 flex-wrap lg:ml-8">
        {candidates
          ?.filter((candidat) =>
            input
              ? candidat.nom.toLowerCase().includes(input.toLowerCase())
              : true
          )
          ?.map((candidat) => (
            <Link href={`#`} key={candidat.id}>
              <div className="row w-[260px] max-sm:w-[290px]">
                <div className="col-md-3">
                  <div className="card card-product">
                    <div className="card-image">
                      <img
                        className="img max-w-[230px] max-h-[230px] object-cover"
                        src={`https://elektion.de-vie.com/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
                      />
                    </div>
                    <div className="table">
                      <h6 className="category text-rose">
                        {`${candidat.scrutin.replace("Legislatif", "Député")} `}
                        <span>N°{candidat.numeroCandidat}</span>
                      </h6>
                      <h4 className="card-caption">
                        <p className="text-lg">{candidat?.nom}</p>
                      </h4>
                      <div className="card-description">
                        Parti Politique : UDPS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
