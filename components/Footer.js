"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "/public/assets/images/logos/logo-white.png";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const handleHome = () => {
    router.push("/home");
  };
  return (
    <div className="bg-[#050B0E] text-white w-full p-16 max-sm:p-4 text-sm">
      <div className="grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:items-start gap-4 w-full">
        <div className="flex flex-col gap-5 ">
          <Image
            src={logo}
            alt="logo "
            width={230}
            height={40}
            className="cover cursor-pointer"
            onClick={handleHome}
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
          <ul className="flex flex-col font-[500] ">
            <li>
              <Link href="/">
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
                      ? "flex p-1"
                      : "flex p-1 hover:underline"
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
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
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
            <li>
              <Link href="/parti">
                <div
                  className={
                    pathname === "/parti"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
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
            <li>
              <Link href="/province">
                <div
                  className={
                    pathname === "/province"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
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
            <li>
              <Link href="/contact_us">
                <div
                  className={
                    pathname === "/contact_us"
                      ? "flex p-1"
                      : "flex p-1 hover:hover:underline"
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
        </div>
        <div className="flex flex-col max-sm:w-full">
          <h3 className="text-lg pb-2">Souscrivez à notre news letter</h3>
          <form class="w-full" noValidate>
            <div class="flex flex-col items-center">
              <div class="w-full">
                <input
                  id="subscription_email"
                  name="subscription_email"
                  type="email"
                  placeholder="Ecrivez votre adresse email"
                  class="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body placeholder-body min-h-12  duration-200  bg-white border-gray-300 focus:outline-none focus:border-heading md:h-12  lg:px-7 h-12 lg:h-14 text-center  text-black"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
              </div>
              <button
                data-variant="flat"
                class="w-full bg-app-blue transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-800 mt-2 flex-shrink-0"
              >
                <span class="lg:py-0.5">Souscrire</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
