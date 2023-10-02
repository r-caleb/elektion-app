"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsStopwatch } from "react-icons/bs";

export default function Province() {
  const [provinces, setProvince] = useState([]);
  const [input, setInput] = useState("");

  const fetchData = () => {
    fetch("https://www.de-vie.com/processus_E_api/api/list_province?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProvince(data.data.sort());
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(provinces);

  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 px-16">
      <div className="flex my-8">
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Listes des provinces
            </h5>
          </div>
          <div class="flow-root">
            <ul
              role="list"
              class="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {provinces
                ?.filter((province) =>
                  input
                    ? province.nom.toLowerCase().includes(input.toLowerCase())
                    : true
                )
                ?.map((province) => (
                  <li class="py-3" key={province.id}>
                     <Link href={`/province/${province.nom}`} key={province.id}>
                      <div class="flex items-center space-x-4">
                        <p class="text-md font-medium text-gray-900 truncate dark:text-white">
                          {province.nom}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
