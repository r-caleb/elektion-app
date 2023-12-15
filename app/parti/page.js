"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import flag from "/public/assets/images/flag.jpg";

export default function Parti() {
  const [parti, setParti] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = () => {
    fetch("https://de-vie.com/processus_E_api/api/get_parti_partie")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setParti(data.ListData);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(parti);

  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="bg-white p-3 my-4 shadow-md">
        <p className="text-app-blue p-2 text-xl">
          Liste des partis politiques
        </p>
        <div className="flex justify-between max-md:flex-col-reverse items-center mt-1 mb-2 p-2">
          <div>
            <span className="text-app-blue font-bold"> {parti.length} </span>
            Partis Politiques
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-[40px]  rounded-[8px]"
          >
            <input
              type="text"
              placeholder="Chercher un parti"
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
        {parti &&
          parti
            .filter((parti) =>
              input
                ? parti.nom.toLowerCase().includes(input.toLowerCase())
                : true
            )
            ?.map((parti) => (
              <div className="row w-[260px]" key={parti.id}>
                <div className="col-md-3">
                  <div className="card card1 card-product">
                    <div className="card-image">
                      <a href="#">
                        {parti.logo ? (
                          <Image
                            className="img max-w-[230px] max-h-[180px] object-cover"
                            src={`https://elektion.de-vie.com/web/assets/images/logoParti/${parti.logo}`}
                            width={500}
                            height={500}
                          />
                        ) : (
                          <Image
                            src={flag}
                            alt="flag"
                            width={500}
                            className="cover "
                          />
                        )}
                      </a>
                    </div>
                    <div className="table">
                      <p
                        className="text-lg text-app-blue font-semibold"
                        dangerouslySetInnerHTML={{ __html: parti?.nom }}
                      />

                      <p className="text-sm"> {parti.fondateur}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
