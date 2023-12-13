"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function PDFViewer() {
  const containerRef = useRef(null);
  const id = useParams();
  let file;
  if (id.id == "LOI%20ELECTORALE%20N%C2%B022-029%20DU%2029%20JUIN%202022") {
    file = "LOI ELECTORALE N°22-029 DU 29 JUIN 2022";
  } else if (
    id.id == "Loi%20%C3%A9lectorale%20textes%20coordonn%C3%A9s%202017"
  ) {
    file = "Loi électorale textes coordonnés 2017";
  } else {
    file = "J.O. n° spécial du 24 juin 2023_REPARTITION DES SIEGES";
  }

  console.log(file);
  useEffect(() => {
    const container = containerRef.current;
    let PSPDFKit;

    (async function () {
      PSPDFKit = await import("pspdfkit");

      if (PSPDFKit) {
        PSPDFKit.unload(container);
      }

      await PSPDFKit.load({
        container,
        document: `/${file}.pdf`,
        baseUrl: `${window.location.protocol}//${window.location.host}/`,
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} className="h-screen w-screen" />;
}
