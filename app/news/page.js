"use client";
import React, { useEffect, useState } from "react";
import { BsStopwatch } from "react-icons/bs";
import Moment from "react-moment";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import Link from "next/link";
import "moment/locale/fr";

export default function News() {
  const [input, setInput] = useState("");
  const [infos, setInfo] = useState([]);

  const fetchData = () => {
    fetch("https://de-vie.com/processus_E_api/api/articles?search=")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfo(data.artiData);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="bg-white p-3 my-3 shadow-md">
        <div className="flex justify-between max-sm:flex-col max-sm:items-start max-sm:mt-0 items-center mt-8 mb-2 p-2">
          {" "}
          <div>
            <div className="py-[0.5rem] flex ">{infos.length} Articles</div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center h-[50px]  rounded-[8px]"
          >
            <input
              type="text"
              placeholder="Rechercher un article"
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
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4 my-8">
        {infos
          ?.filter((info) =>
            input
              ? info.titre.toLowerCase().includes(input.toLowerCase())
              : true
          )
          ?.map((info) => (
            <Link href={`/news/${info.id}`} key={info.id}>
              <div className="bg-white overflow-hidden border-b-4 border-blue-500">
                <img
                  src={`https://elektion.de-vie.com/web/assets/images/ImageArticle/${info?.image}`}
                  alt="People"
                  className="w-full object-cover h-32 sm:h-48 md:h-64"
                />
                <div className="p-3">
                  <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
                    News
                  </p>
                  <h3 className="font-semibold mb-2 text-md leading-tight sm:leading-normal">
                    {info.titre}
                  </h3>
                  <div className="text-xs flex items-center">
                    <BsStopwatch size={15} className="mr-1" />
                    {/* <p className="leading-none">{info.date}</p> */}
                    <Moment locale="fr" format="D MMMM YYYY HH:mm" withTitle>
                      {info.date}
                    </Moment>
                  </div>
                  <Link
                    href={`${info?.lien}`}
                    className="z-10 gap-y-1 overflow-hidden text-xs leading-"
                  >
                    <span>Source</span>
                    <span>{`: ${info?.lien?.substring(
                      info?.lien.indexOf("/", 7) + 1,
                      info?.lien.indexOf("/", 8)
                    )}`}</span>
                  </Link>
                  <div className="flex items-center gap-2 pt-3">
                    <p>Partager sur :</p>
                    <FacebookShareButton
                      url={`https://rdc-elektion-app.vercel.app/news/${info.id}`}
                      quote={info.titre}
                      hashtag={"election"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <WhatsappShareButton
                      url={`https://rdc-elektion-app.vercel.app/news/${info.id}`}
                      title={info.titre}
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={`https://rdc-elektion-app.vercel.app/news/${info.id}`}
                      title={info.titre}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton
                      url={`https://rdc-elektion-app.vercel.app/news/${info.id}`}
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <TelegramShareButton
                      url={`https://rdc-elektion-app.vercel.app/news/${info.id}`}
                      title={info.titre}
                    >
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
