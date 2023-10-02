"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Candidat() {
  const [candidats, setCandidat] = useState([]);
  const id = useParams();

  useEffect(() => {
    fetch(
      `https://www.de-vie.com/processus_E_api/api/list_candidat?filtre=Tous&search=`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCandidat(data.data);
      });
  }, []);
  const IdCandidat = id.id.slice(0, -3);
  const candidat = candidats?.filter((data) => data && data.id == IdCandidat);


  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 px-16"></section>
  );
}
