"use client";
import Image from "next/image";
import calendrier from "/public/assets/images/calendrier.png";
import calend from "/public/assets/images/calend.png";
import parti from "/public/assets/images/parti.png";
import juridique from "/public/assets/images/juridique.png";
import electa from "/public/assets/images/electa.jpg";
import candidat from "/public/assets/images/candidat.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useRouter } from "next/navigation";

export default function Accueil() {
  const [infos, setInfo] = useState([]);
  const router = useRouter();
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
  console.log(infos);
  const handleCalendar = () => {
    router.push("/calendar");
  };
  return (
    <main className="flex flex-col justify-between lg:px-8 xl:px-16 max-lg:px-6 max-sm:px-3 my-4">
      <header className="flex items-center justify-between max-sm:flex-col w-full gap-4">
        {
          <Link href={`/news/${infos[0]?.id}`}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-[350px] max-sm:pt-[230px] w-full">
              <Image
                width={500}
                height={500}
                src={`https://elektion.de-vie.com/web/assets/images/ImageArticle/${infos[0]?.image}`}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <Moment locale="fr" format="D MMM YYYY" withTitle>
                  {infos[0]?.date}
                </Moment>
              </div>
              <h3 className="z-10 mt-1 h-14 text-xl font-bold text-white">
                {infos[0]?.titre}
              </h3>
            </article>
          </Link>
        }
        <div className="w-2/3 max-sm:w-full flex flex-col gap-4">
          <Link href={`/news/${infos[1]?.id}`}>
            <article className="relative isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-[108px] max-sm:pt-[230px] w-full">
              <Image
                src={`https://elektion.de-vie.com/web/assets/images/ImageArticle/${infos[1]?.image}`}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <Moment locale="fr" format="D MMM YYYY" withTitle>
                  {infos[1]?.date}
                </Moment>
              </div>
              <h3 className="z-10 mt-1 max-sm:mb-4  h-14 text-md font-bold text-white">
                {infos[1]?.titre}
              </h3>
            </article>
          </Link>
          <Link href={`/news/${infos[2]?.id}`}>
            <article className="relative max-sm:hidden isolate flex flex-col justify-end overflow-hidden px-8 pb-8 pt-[108px] w-full">
              <Image
                src={`https://elektion.de-vie.com/web/assets/images/ImageArticle/${infos[2]?.image}`}
                alt="University of Southern California"
                className="absolute inset-0 h-full w-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <Moment locale="fr" format="D MMM YYYY" withTitle>
                  {infos[2]?.date}
                </Moment>
              </div>
              <h3 className="z-10 mt-1 max-sm:mb-4 text-md h-14 font-bold text-white">
                {infos[2]?.titre}
              </h3>
            </article>
          </Link>
        </div>
      </header>
      <section className="my-8 w-full">
        <div className="w-full">
          <h1 className="my-2 text-lg font-bold border-b border-app-blue text-app-blue">
            Calendrier électoral
          </h1>
          <div className="flex justify-between max-md:flex-col items-center my-4 gap-24">
            <div className="flex flex-col w-2/5 max-md:w-full">
              <Image
                src={calendrier}
                alt="logo"
                width={500}
                className="cover mb-4"
              />
              <p className="text-sm pb-2 text-app-blue font-bold ">
                Du 1 décembre 2023 Au 31 décembre 2023
              </p>
              <h3 className="text-md">
                Votes combinés du Président de la République, des députés
                nationaux, des députés provinciaux et des conseillers de
                commune, de secteur et de chefferie
              </h3>
            </div>
            <div className="flex flex-col w-3/5 max-md:w-full max-md:border-none max-md:pl-0 border-l pl-16">
              <div className="flex items-center gap-4 ">
                <Image
                  src={calend}
                  alt="logo"
                  width={180}
                  className="cover mb-4"
                />
                <div>
                  <p className="text-xs pb-2 text-app-blue font-bold ">
                    Du 1 décembre, 2023 Au 31 mars, 2024
                  </p>
                  <h3 className="text-sm">
                    Ramassage, agrégation et annonce des résultats provisoires
                    des scrutins, contentieux des résultats électoraux et
                    publication de résultats définitifs et cooptation des chefs
                    coutumiers aux assemblées provinciales
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 ">
                <Image
                  src={calend}
                  alt="logo"
                  width={180}
                  className="cover mb-4"
                />
                <div>
                  <p className="text-xs pb-2 text-app-blue font-bold ">
                    Du 1 janvier, 2024 Au 31 janvier, 2024
                  </p>
                  <h3 className="text-sm">
                    Plaidoyer et lobbying auprès des autres institutions
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={calend}
                  alt="logo"
                  width={180}
                  className="cover mb-4"
                />
                <div>
                  <p className="text-xs pb-2 text-app-blue font-bold ">
                    Du 1 janvier, 2024 Au 31 janvier, 2024
                  </p>
                  <h3 className="text-sm">
                    Cadres de concertation sur l'organisation des scrutins
                    indirects des sénateurs et des conseillers urbains, des
                    gouverneurs, des bourgmestres et chefs de secteur ainsi que
                    des mairies
                  </h3>
                </div>
              </div>
              <button
                className="text-white bg-app-blue p-2 w-28 transform transition duration-500 hover:scale-110 self-end"
                title="Cliquez pour afficher tout le calendrier"
                onClick={handleCalendar}
              >
                Voir plus
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-12">
          <p className="py-6 text-lg font-bold text-app-blue">
            Consulter d'autres ressources en lien avec le processus électoral
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col">
              <Link href="/candidat">
                <div className="flex flex-col justify-center items-center shadow-md rounded-lg transform transition duration-500 hover:scale-110">
                  <Image
                    src={candidat}
                    alt="logo"
                    width={245}
                    className="cover"
                  />
                  <p className="py-1.5 px-4 font-semibold">Espace Candidat</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link href="/parti">
                <div className="flex flex-col items-center justify-center shadow-md rounded-lg transform transition duration-500 hover:scale-110">
                  <Image
                    src={parti}
                    alt="logo"
                    width={226}
                    className="cover mb-4"
                  />
                  <p className="px-4 pb-1 font-semibold">Parti Politique</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              {" "}
              <Link href="/province">
                <div className="flex flex-col  justify-center items-center shadow-md rounded-lg transform transition duration-500 hover:scale-110">
                  <Image
                    src={electa}
                    alt="logo"
                    width={240}
                    className="cover mb-1 rounded-lg h-[166px]"
                  />
                  <p className="pb-1 px-4 font-semibold">Centre de vote</p>
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link href="/legal-text">
                <div className="flex flex-col justify-center items-center shadow-md rounded-lg transform transition duration-500 hover:scale-110">
                  <Image
                    src={juridique}
                    alt="logo"
                    width={250}
                    className="cover mb-4"
                  />
                  <p className="pb-1 px-4  font-semibold">Textes Légaux</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-contact bg-cover bg-top h-[400px] max-sm:h-[500px] my-8">
          <div className="py-5 mt-5">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className=" flex flex-col max-lg:px-4 max-lg:py-0 pl-24 pr-96 mr-16 gap-8 pt-16">
                  <h2 className="text-3xl text-white font-bold">
                    Besoin d'aide ?
                  </h2>
                  <h6 className="text-md text-white">
                    Pour plus amples informations concernant vos préoccupations
                    sur la plateforme veuillez nous contacter et vous pouvez
                    laissez un avis
                  </h6>
                  <a
                    href="/contact_us"
                    className="text-[14px] bg-transparent border hover:text-black border-white rounded-sm py-4 px-8 w-[180px] hover:bg-white  text-white transform transition duration-500 hover:scale-110"
                  >
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
