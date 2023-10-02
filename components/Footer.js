"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "/public/assets/images/logos/logo-white.png";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  return (
    <div className="bg-[#050B0E] text-white w-full p-16 text-sm">
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="flex flex-col gap-5 ">
          <Image
            src={logo}
            alt="logo "
            width={230}
            height={40}
            className="cover"
          />

          <p>
            Entreprise oeuvrant dans le secteur de l'informatique et de la
            communication.
          </p>
          <div className="flex items-center gap-6 ">
            <FaFacebook size={30} color="#2076fb" />
            <div className="bg-app-blue rounded-full p-1.5">
              <FaTwitter size={20} color="#fff" />
            </div>
            <div className="bg-[#C23785] rounded-full p-1.5">
              <FaInstagram size={20} color="#fff" />
            </div>
            <div className="bg-[#fa423b] rounded-full p-1.5">
              <FaYoutube size={20} color="#fff" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pb-2">
          <h4 className="text-lg">Liens </h4>
          <ul className="flex flex-col font-[500] ">
            <li>
              <Link href="/ ">
                <div
                  className={
                    pathname === "/" ? "flex p-1" : "flex p-1 hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/" ? " border-b-2 " : ""
                    }}`}
                  >
                    Home
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <div
                  className={
                    pathname === "/home"
                      ? "flex p-1"
                      : "flex p-1 hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Actualités
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <div
                  className={
                    pathname === "/home"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Candidat
                  </span>
                </div>
              </Link>
            </li>{" "}
            <li>
              <Link href="/home">
                <div
                  className={
                    pathname === "/home"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Parti Politique
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <div
                  className={
                    pathname === "/home"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Centre
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <div
                  className={
                    pathname === "/home"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
                  }
                >
                  <span
                    className={`text-[14px] ${
                      pathname === "/home" ? " border-b-2 " : ""
                    }}`}
                  >
                    Contactez-nous
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3>Souscrivez à notre news letter</h3>
          <p>
            Entreprise oeuvrant dans le secteur de l'informatique et de la
            communication
          </p>
        </div>
      </div>
    </div>
  );
}
