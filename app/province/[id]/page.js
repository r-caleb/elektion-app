"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function Center() {
  const [activeElement, setActiveElement] = useState(
    "Selectionner une circonscription"
  );
  const [centers, setCenter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const id = useParams();
  let nomProvince = id.id;
  const fetchData = () => {
    fetch(`https://de-vie.com/processus_E_api/api/list_centre?search=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCenter(data.data);
      });
  };
  console.log(input);
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [input]);
  const centerProvince = centers.filter(
    (center) => center.province === nomProvince
  );
  const provinceCenter = centerProvince.filter((center) =>
    activeElement !== "Selectionner une circonscription"
      ? center.circonscription === activeElement
      : true
  );
  const handleSelect = (e) => {
    setActiveElement(e.target.value);
  };
  const categoryAll = centerProvince.map((center) => center.circonscription);
  let categories = [...new Set(categoryAll)];
  const groupObjectByField = (items, field) => {
    const outputs = {};
    items.forEach((item) => {
      if (outputs.hasOwnProperty(item[field])) {
        outputs[item[field]].values.push(item);
      } else {
        outputs[item[field]] = { name: item[field], values: [item] };
      }
    });
    return Object.values(outputs);
  };
  console.log("categ", categories);
  const communeCenter = groupObjectByField(provinceCenter, "circonscription");
  console.log("commune", communeCenter);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let skeletonCards = Array(10).fill(0);

  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="bg-white p-3 my-2 shadow-md">
        <div className="flex justify-between max-sm:flex-col max-sm:items-start items-center mt-8 mb-2 p-2">
          {" "}
          <div>
            {nomProvince} :<span> {provinceCenter.length} centres</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-[40px]  rounded-[8px]"
          >
            <input
              type="text"
              placeholder="Chercher un centre"
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
        <div className="flex justify-between items-center p-2">
          <div>Circonscription de </div>
          <div>
            <select
              id="circonscriptions"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleSelect}
            >
              <option selected>Selectionner une circonscription</option>
              {categories.map((center) => (
                <option value={center} key={center}>
                  {center}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-md:flex-col items-start gap-4">
        {loading
          ? skeletonCards.map((index) => (
              <div className="flex w-full flex-1 flex-col items-center">
                <div className="mt-12 w-[500px] animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
                  <div className="flex flex-col space-y-2">
                    <div className="h-[300px] rounded-md bg-gray-300 "></div>
                  </div>
                </div>
              </div>
            ))
          : communeCenter?.map((center) => (
              <div className="py-[1rem] sm:w-[600px]" key={center.name}>
                <div>
                  <div className="bg-app-blue font-bold text-[#f5f6fa] sm:w-[15rem] p-[0.5rem] rounded-t-md ">
                    {center.name}
                  </div>
                  <div className="flex flex-col shadow-xl bg-white p-[0.6rem]">
                    {center.values.map((item) => (
                      <div className="flex p-[1rem] justify-between">
                        <div>
                          <strong>{item.nomCentre}</strong>
                        </div>
                        {/* 
                    <div>{item.NbrDesBureaux} bureaux de votes</div> */}
                        <div>{item.adresse}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}
