"use client";

import "styles/styles.css";
import { title } from "@/components/primitives";
import Image from "next/image";
import Skills from "@/components/Skill.component";
import { Shadows_Into_Light } from "next/font/google";
import { Contact } from "@/components/Contact.component";
import { Analytics } from "@vercel/analytics/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { Chip } from "@nextui-org/react";

const shadow = Shadows_Into_Light({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const handleDownload = () => {
    const fileName = "Resume-LucasChanquia.pdf";
    const fileUrl = `/${fileName}`;

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="w-full h-full">
        <article className="mb-4">
          <div className="lg:flex justify-center m-auto lg:gap-3 w-full sm:max-w-[80%] ">
            <div className="flex flex-col">
              <div className="bg-slate-800 rounded-md p-5 my-2 h-max sm:flex justify-between gap-2">
                <div className="w-auto m-auto">
                  <Image
                    src="/image/perfil/Vector.webp"
                    alt="Imagen de perfil"
                    width={200}
                    height={300}
                    className="m-auto"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 sm:justify-between sm:m-auto">
                  <div className="mb-[-15px]">
                    <h1 className="text-[20px] text-center">{`I'm Lucas Chanquía`}</h1>
                  </div>
                  <div>
                    <h2 className="text-center">
                      Frontend <span>developer</span>
                    </h2>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center pb-3 mt-5 sm:mt-0">
                    <Chip variant="shadow" color="default" radius="sm">
                      <div className="flex gap-1 items-center">
                        <i className="fi fi-rr-marker"> </i>Argentina
                      </div>
                    </Chip>

                    <Chip variant="shadow" color="default" radius="sm">
                      <div className="flex gap-1 items-center">
                        <i className="fi fi-brands-java"></i>Autodidact
                      </div>
                    </Chip>

                    <Chip variant="shadow" color="default" radius="sm">
                      <div className="flex gap-1 items-center">
                        <i className="fi fi-rr-graduation-cap"></i>Bootcamp
                      </div>
                    </Chip>
                  </div>

                  <div className="flex justify-center gap-2 flex-wrap mt-5 sm:mt-0">
                    <Button
                      as={Link}
                      href="https://wa.me/5493515118325/?text=Hola!%20Vi%20tu%20portfolio%20y%20estoy%20interesado%20en%20conectar%20contigo"
                      color="success"
                      target="_blank"
                      radius="sm"
                      variant="flat"
                    >
                      <i className="fi fi-brands-whatsapp"></i> Whatsapp
                    </Button>
                    <Button
                      as={Link}
                      href="https://www.t.me/lucasChanquia"
                      color="primary"
                      target="_blank"
                      variant="flat"
                      radius="sm"
                    >
                      <i className="fi fi-brands-telegram"></i> Telegram
                    </Button>
                    <Button
                      as={Link}
                      color="default"
                      href="#"
                      variant="flat"
                      radius="sm"
                      onClick={handleDownload}
                    >
                      <i className="fi fi-rr-file-download"></i>
                      Download CV
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 rounded-md p-5 my-2 flex flex-col m-auto h-full">
                <span
                  className={`${title({ color: "blue" })} ${
                    shadow.className
                  } text-[20px]`}
                >{`< About Me >`}</span>
                {/* <br /> */}
                <div className="bg-slate-700 rounded-md p-2">
                  <span className="text-[25px] sm:text-[40px] text-violet-600 px-3 ">{`I`}</span>
                  <span className="text-[12px] sm:text-[18px]">
                    am a front-end web development professional based in
                    Córdoba, Argentina, with two years of industry experience. I
                    enjoy tackling complex challenges, continuously learning,
                    and adapting to the latest technological trends, especially
                    when working in a team.
                    <br /> As a freelancer, I aim to be responsible and
                    responsive, always striving to exceed expectations and
                    provide innovative solutions. I am committed to constant
                    growth and delivering high-quality services.
                  </span>
                </div>
              </div>
            </div>

            <div
              id="skills"
              className="bg-slate-800 rounded-md p-5 my-2 min-h-min"
            >
              <span
                className={`${title({ color: "blue" })} ${
                  shadow.className
                } text-[20px]`}
              >{`< Skills >`}</span>
              <Skills />
            </div>
          </div>
        </article>

        <article className="sm:flex sm:max-w-[80%] justify-center m-auto my-2 gap-3">
          <div className="bg-slate-800 rounded-md my-3 sm:my-0 w-full h-[80px] flex items-center">
            <Button
              as={Link}
              href="/jobs"
              color="default"
              variant="solid"
              radius="none"
              className="bg-transparent"
            >
              <h2 className="text-[25px] text-center flex gap-5 items-center">
                Jobs <i className="fi fi-br-arrow-up-right"></i>
              </h2>
            </Button>
          </div>
          <div className="bg-slate-800 rounded-md my-3 sm:my-0 w-full h-[80px] flex items-center">
            <Button
              as={Link}
              href="/projects"
              color="default"
              variant="solid"
              radius="none"
              className="bg-transparent"
            >
              <h2 className="text-[25px] text-right flex gap-5 items-center">
                Projects <i className="fi fi-br-arrow-up-right"></i>
              </h2>
            </Button>
          </div>
        </article>

        <article
          id="contact"
          className="sm:max-w-[80%] w-full flex m-auto sm:my-4"
        >
          <Contact />
        </article>
      </section>
      <Analytics />
    </>
  );
}
