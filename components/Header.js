"use client";

import React from "react";
import { PiSunHorizon } from "react-icons/pi";
import { BsStopwatch } from "react-icons/bs";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "/public/assets/images/logos/logo.png";
import playstore from "/public/assets/images/googleplay.png";
import appstore from "/public/assets/images/appstore.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Moment from "react-moment";
import "moment/locale/fr";

export default function Header({ handleToggleSidebar }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleHome = () => {
    router.push("/home");
  };

  return (
    <div className=" flex flex-col w-full gap-1 bg-white">
      <div className="w-full flex items-center justify-between text-xs lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3 shadow-app">
        <div className="w-full flex items-center bg-white gap-4">
          <FaBars
            className="hidden max-elektion_md:block max-elektion_md:mx-2.5 cursor-pointer text-app-gray"
            size={26}
            onClick={() => handleToggleSidebar()}
          />
          <div className="flex items-center gap-1 max-md:hidden">
            <PiSunHorizon size={15} /> <span>33°C Kinshasa</span>
          </div>
          <div className="flex items-center gap-1 ">
            <BsStopwatch size={15} />{" "}
            <Moment locale="fr" format="D MMM YYYY" withTitle />
          </div>
          <span className="p-2 bg-app-blue text-white max-lg:hidden">
            Breaking News
          </span>
          <span className="max-lg:hidden">
            La CENI lance un appel d’offres international pour l’acquisition des
            kits d’enrôlement des électeurs
          </span>
        </div>
        <div className="flex items-center gap-2 max-lg:py-3 ">
          <FaFacebook size={22} color="#2076fb" />
          <div className="bg-[#0D99FF] rounded-full p-1">
            <FaTwitter size={16} color="#fff" />
          </div>
          <div className="bg-[#C23785] rounded-full p-1">
            <FaInstagram size={16} color="#fff" />
          </div>
          <div className="bg-[#fa423b] rounded-full p-1">
            <FaYoutube size={16} color="#fff" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center max-sm:flex-col max-sm:items-start justify-between bg-white max-xl:gap-4 lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3 py-1">
        <Image
          src={logo}
          alt="logo "
          width={230}
          height={40}
          className="cover cursor-pointer"
          onClick={handleHome}
        />
        <div className="bg-black max-lg:w-full lg:w-5/6 xl:w-4/6 ">
          <div className="bg-home bg-cover opacity-70 bg-center w-full p-4 flex max-lg:flex-col justify-between items-center">
            <div>
              <p className="text-white font-bold  text-lg">
                Ensemble rétablissons la confiance aux électeurs !
              </p>
              <p className="text-white font-bold text-elektion_md py-2">
                La transparence du processus électoral est notre goal
              </p>
            </div>
            <div>
              <p className="text-white font-bold">
                Télécharger notre application mobile🤗
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={playstore}
                  alt="logo playstore"
                  width={150}
                  height={40}
                  className="transform transition duration-500 hover:scale-110 cursor-pointer"
                />
                <Image
                  src={appstore}
                  alt="logo appstore"
                  width={150}
                  height={40}
                  className="transform transition duration-500 hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-app-gray text-white max-elektion_md:hidden">
        <nav
          className={` text-white overflow-hidden w-full bg-app-gray max-elektion_md:top-0 z-[45]
          `}
        >
          <ul className="flex items-center font-[500] lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3 ">
            <li>
              <Link href="/home ">
                <div
                  className={
                    pathname === "/home"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Accueil
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <div
                  className={
                    pathname === "/news"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/news" ? " border-b-2 " : ""
                    }}`}
                  >
                    Actualités
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/candidat">
                <div
                  className={
                    pathname === "/candidat"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/candidat" ? " border-b-2 " : ""
                    }}`}
                  >
                    Candidats
                  </span>
                </div>
              </Link>
            </li>{" "}
            <li>
              <Link href="/parti">
                <div
                  className={
                    pathname === "/parti"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/parti" ? " border-b-2 " : ""
                    }}`}
                  >
                    Partis Politiques
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/province">
                <div
                  className={
                    pathname === "/province"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/province" ? " border-b-2 " : ""
                    }}`}
                  >
                    Centres
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/legal-text">
                <div
                  className={
                    pathname === "/legal-text"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/legal-text" ? " border-b-2 " : ""
                    }}`}
                  >
                    Textes Légaux
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/calendar">
                <div
                  className={
                    pathname === "/calendar"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/calendar" ? " border-b-2 " : ""
                    }}`}
                  >
                    Calendrier Electoral
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact_us">
                <div
                  className={
                    pathname === "/contact_us"
                      ? "active flex p-2 lg:p-4"
                      : "flex p-2 lg:p-4 hover:bg-[#393939]"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/contact_us" ? " border-b-2 " : ""
                    }}`}
                  >
                    Contactez-nous
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
