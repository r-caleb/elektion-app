"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import homme from "/public/assets/images/homme.png";
import SkeletonCard from "../../components/SkeletonCard2";

const keywords = ["Presidentielle", "Legislatif National"];

export default function Candidat() {
  const [activeElement, setActiveElement] = useState("Presidentielle");
  const [candidats, setCandidat] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

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
    if (candidats) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [candidats]);
  const handleClick = (value) => {
    setActiveElement(value);
  };
  const candidates = candidats.filter((candidat) =>
    activeElement !== "Tout" ? candidat.scrutin === activeElement : true
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(candidates);
  let skeletonCards = Array(8).fill(0);
  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="bg-white p-3 max-sm:p-1 my-6 shadow-md">
        <p className="text-app-blue p-2 text-xl">
          Liste des candidats à l'élection présidentielle et à la législative
          nationale
        </p>
        <div className="flex justify-between max-md:flex-col-reverse items-center mt-1 mb-2 p-2">
          <div>
            <div className="py-[0.5rem] flex flex-wrap">
              {keywords.map((value, i) => (
                <span
                  onClick={() => handleClick(value)}
                  key={i}
                  className={`mr-[1rem] my-1 max-sm:mr-[0.4rem] max-sm:p-[0.3rem] p-[0.5rem] text-sm border border-[#d2d4d8] bg-[#f9fafb] cursor-pointer rounded-md hover:bg-app-gray hover:text-white ${
                    activeElement === value ? "active" : ""
                  }`}
                >
                  {value == "Presidentielle"
                    ? "Présidentielle"
                    : "Législative nationale"}
                </span>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-[50px] rounded-[8px]"
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
      <div className="flex gap-4 xl:ml-6 max-xl:justify-center flex-wrap lg:ml-8">
        {loading
          ? skeletonCards.map((index) => (
              <div className="flex w-full flex-1 flex-col items-center">
                <div className="mt-12 w-[250px] animate-pulse flex-row items-center justify-center rounded-xl border p-2 ">
                  <div className="flex flex-col space-y-2">
                    <div className="h-[300px] rounded-md bg-gray-300 "></div>
                    <div className="h-6 rounded-md bg-gray-300 "></div>
                  </div>
                </div>
              </div>
            ))
          : candidates
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
                          {candidat.photoCandidat ? (
                            <Image
                              className="img max-h-[230px] object-cover cover"
                              src={`https://elektion.de-vie.com/web/assets/images/PhotoCandidats/${candidat.photoCandidat}`}
                              width={500}
                              height={500}
                            />
                          ) : (
                            <Image
                              src={homme}
                              alt="flag"
                              width={500}
                              className="cover"
                            />
                          )}
                        </div>
                        <div className="table">
                          <h6 className="category text-rose text-center">
                            {" "}
                            {`${
                              candidat.scrutin == "Presidentielle"
                                ? "Candidat Président"
                                : candidat.scrutin.replace(
                                    "Legislatif",
                                    "Député"
                                  )
                            } `}
                          </h6>
                          <div className="text-center font-medium">
                            <span>N°{candidat.numeroCandidat}</span>
                          </div>
                          <h4 className="card-caption">
                            <p className="text-lg">{candidat?.nom}</p>
                          </h4>

                          <div className="card-description">
                            {candidat?.parti_politique.substring(
                              candidat?.parti_politique.indexOf("|") + 1
                            )}
                            {candidat.scrutin == "Legislatif National" && (
                              <div className="text-center font-medium">
                                <span>{candidat.circonscription}</span>
                              </div>
                            )}
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
