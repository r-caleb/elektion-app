"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import logo from "/public/assets/images/logos/logo.png";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function SideBar({ sidebar, handleToggleSidebar }) {
  const pathname = usePathname();
  const [value, setValue] = useState("fr");
  const router = useRouter();
  const handleHome = () => {
    router.push("/home");
  };

  return (
    <>
      <div
        onClick={() => handleToggleSidebar(false)}
        className={`elektion_md:hidden bg-[rgba(0,0,0,0.5)] fixed top-0 z-[45] w-screen h-full overlfow-hidden  ${
          sidebar
            ? "max-elektion_md:flex transition ease-in duration-300"
            : "max-elektion_md:hidden"
        }`}
      ></div>
      <nav
        className={`border-r text-app-dark-green overflow-hidden w-[14rem] max-elektion_md:w-[20rem]  bg-white elektion_md:hidden  fixed max-elektion_md:top-0  h-full z-[45]
                    ${
                      sidebar
                        ? "max-elektion_md:flex-col transition ease-in duration-300"
                        : "max-elektion_md:hidden"
                    }`}
      >
        <div className="flex-1 hidden max-elektion_md:inline items-center">
          <div className="flex justify-between items-center">
            <Image
              src={logo}
              alt="logo"
              width={180}
              className="my-1 mx-4 object-cover h-auto cursor-pointer"
              onClick={handleHome}
            />

            <AiOutlineCloseSquare
              className="cursor-pointer"
              size={30}
              onClick={() => handleToggleSidebar(false)}
            />
          </div>
        </div>

        <hr />
        <ul className=" font-[500] ">
          <li onClick={() => handleToggleSidebar(false)}>
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
          <li onClick={() => handleToggleSidebar(false)}>
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
          <li onClick={() => handleToggleSidebar(false)}>
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
                  Candidat
                </span>
              </div>
            </Link>
          </li>{" "}
          <li onClick={() => handleToggleSidebar(false)}>
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
                  Parti Politique
                </span>
              </div>
            </Link>
          </li>
          <li onClick={() => handleToggleSidebar(false)}>
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
                  Centre
                </span>
              </div>
            </Link>
          </li>
          <li onClick={() => handleToggleSidebar(false)}>
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
          <li onClick={() => handleToggleSidebar(false)}>
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
          <li onClick={() => handleToggleSidebar(false)}>
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
    </>
  );
}
