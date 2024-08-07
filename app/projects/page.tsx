'use client'

import { projects } from "@/components/Utils/ProjectsItem";
import { Comfortaa } from "next/font/google";
import { title } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import { Button, Chip, Tooltip } from "@nextui-org/react";
import { useStore } from "@/store/store";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export interface ProjectsProp {
  id: number;
  name: string;
  image: string[];
  description: string;
  skill: string[];
  url: string;
  git: string;
}

export default function Projects() {
  const {setActiveLink} = useStore()

  return (
    <>
      <div className=" pb-[20px] border-b border-b-violet-700  w-full md:max-w-[80%] m-auto">
        <div className="flex justify-between">
          <h3
            className={`${title({ color: "blue" })} ${
              comfortaa.className
            } text-[30px] pl-[20px]`}
          >{`< Projects />`}</h3>

          <Button
            as={Link}
            href="/"
            color="secondary"
            onClick={()=>{setActiveLink('home')}}
            className=" bg-gray-700 mb-2 p-2 mr-2"
          >
            <span className="flex gap-3 items-center text-[16px]">
              <i className="fi fi-sr-undo text-[16px] text-gray-500"></i>Back
            </span>
          </Button>
        </div>

        <article className="w-full grid sm:grid-cols-2">
          {projects.map(
            ({ name, image, description, skill, url, git }: ProjectsProp) => {
              return (
                <>
                  <div className="bg-slate-800 rounded-md p-5 m-2 gap-2">
                    <div className="flex flex-col w-full h-full gap-3">
                      <div className="relative pb-2">
                        <Image
                          src={image[0]}
                          alt={name}
                          width={600}
                          height={600}
                          className="w-full md:w-[80%] m-auto mt-2 rounded-md aspect-video"
                        />
                        <div className="absolute right-2 bottom-4">
                          {url && (
                            <Link
                              href={url}
                              color="secondary"
                              target="_blank"
                              className="flex pl-1 pt-2"
                            >
                              <Tooltip content="Web site">
                                <i className="fi fi-br-browser text-gray-500"></i>
                              </Tooltip>
                            </Link>
                          )}
                          {git && (
                            <Link
                              href={git}
                              color="secondary"
                              target="_blank"
                              className="flex pl-1 pt-2"
                            >
                              <Tooltip content="Github">
                                <i className="fi fi-brands-github text-gray-500"></i>
                              </Tooltip>
                            </Link>
                          )}
                          {/* {youtube && (
                              <Link
                                href={youtube}
                                color="secondary"
                                target="_blank"
                                className="flex pl-1 pt-2"
                              >
                                <Tooltip content="Youtube">
                                  <i className="fi fi-brands-youtube text-red"></i>
                                </Tooltip>
                              </Link>
                            )} */}
                        </div>
                      </div>

                      {/* <h1>{name}</h1> */}
                      <div className="bg-slate-700 rounded-md p-2 h-[100%] flex flex-col justify-between">
                        <p className="m-3">{description}</p>

                        <div className="flex flex-wrap justify-center gap-3 pt-4">
                          {skill.map((element, index) => (
                            <Chip variant="faded" color="success" key={index}>
                              {element}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          )}
        </article>
      </div>
    </>
  );
}
