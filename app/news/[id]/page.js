"use client";
import React, { useEffect, useState } from "react";
import justice from "/public/assets/images/justice.png";
import Image from "next/image";
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
import "moment/locale/fr";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function OneNews() {
  const [infos, setInfo] = useState([]);
  const id = useParams();

  let url = `https://uwazzi-plateforms.vercel.app/infos/${id.id}`;

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
  const news = infos?.filter((info) => info && info.id == id.id);

  return (
    <section className="w-full bg-gradient-to-t from-[#E1E2E5] to-white-500 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3">
      <div className="flex items-start max-lg:flex-col py-8 gap-12">
        <div className="flex flex-col justify-center w-2/3 max-lg:w-full">
          <h2 className="font-bold text-2xl">{news[0]?.titre}</h2>
          <p className="flex items-center pt-2 pb-4 text-sm text-[#616972]">
            Publié le :
            <Moment
              locale="fr"
              format="D MMMM YYYY HH:mm"
              withTitle
              className="px-1"
            >
              {news[0]?.date}
            </Moment>
            <BsStopwatch size={15} className="mr-2 ml-3" />
            <Moment fromNow locale="fr">
              {news[0]?.date}
            </Moment>
          </p>
          {news && (
            <Image
              src={`https://elektion.de-vie.com/web/assets/images/ImageArticle/${news[0]?.image}`}
              alt="info image"
              width={500}
              height={500}
              className="object-contain mb-4 w-full "
            />
          )}
          <p
            dangerouslySetInnerHTML={{ __html: news[0]?.contenu }}
            className="py-3"
          />
          <hr className="border-[#c5c3c3]" />
          <div className="flex items-center gap-2 py-3">
            <p>Partager sur :</p>
            <FacebookShareButton
              url={"https://github.com/next-share"}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <WhatsappShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
              separator=":: "
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={"https://github.com/next-share"}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
          </div>
          <hr className="border-[#c5c3c3]" />
        </div>
        <div className="shadow-md p-4 w-1/3 max-lg:w-full mt-24 max-lg:mt-0">
          <h3 className="text-md font-medium py-3">Actualités récentes</h3>
          <hr className="border-[#c5c3c3]" />
          {infos?.map((info) => (
            <Link href={`/news/${info.id}`} key={info.id}>
              <div className="bg-white overflow-hidden border-b-4 border-blue-500 max-sm:my-4 py-4">
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
                  <div className="flex items-center gap-2 pt-3">
                    <p>Partager sur :</p>
                    <FacebookShareButton
                      url={"https://github.com/next-share"}
                      quote={
                        "next-share is a social share buttons for your next React apps."
                      }
                      hashtag={"#nextshare"}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <WhatsappShareButton
                      url={"https://github.com/next-share"}
                      title={
                        "next-share is a social share buttons for your next React apps."
                      }
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TwitterShareButton
                      url={"https://github.com/next-share"}
                      title={
                        "next-share is a social share buttons for your next React apps."
                      }
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={"https://github.com/next-share"}>
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                    <TelegramShareButton
                      url={"https://github.com/next-share"}
                      title={
                        "next-share is a social share buttons for your next React apps."
                      }
                    >
                      <TelegramIcon size={32} round />
                    </TelegramShareButton>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
