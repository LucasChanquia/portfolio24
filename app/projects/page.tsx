import { projects } from "@/components/Utils/ProjectsItem";
import { Comfortaa } from "next/font/google";
import { title } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import { Chip, Tooltip } from "@nextui-org/react";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });

export interface ProjectsProp {
    id:          number;
    name:        string;
    image:       string[];
    description: string;
    skill:       string[];
    url:         string;
    git:         string;
}


export default function Projects () {
    return (
        <>
        <div className=" pb-[20px] border-b border-b-violet-700">
          <h3
            className={`${title({ color: "blue" })} ${
              comfortaa.className
            } text-[30px] pl-[20px]`}
          >{`< Projects />`}</h3>
  
          <article className="w-full grid sm:grid-cols-2">
            {projects.map(
              ({
                name,
                image,
                description,
                skill,
                url,
                git,
              }: ProjectsProp) => {
                return (
                  <>
                    <div className="bg-slate-800 rounded-md p-5 m-2 justify-between gap-2">
                      <div className="flex flex-col gap-3">
                        <div className="relative">
                          <Image
                            src={image[0]}
                            alt={name}
                            width={600}
                            height={600}
                            className="w-[50%] m-auto mt-2 rounded-md aspect-video"
                          />
                          <div className="absolute right-2 bottom-2">
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
                                  <i className="fi fi-brands-github"></i>
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
                        <p className="bg-slate-700 rounded-md p-2">
                          {description}
                        </p>
                      </div>
  
                      <div className="flex flex-wrap justify-center gap-3 pt-4">
                        {skill.map((element, index) => (
                          <Chip variant="faded" color="success" key={index}>
                            {element}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </article>
        </div>
      </>
        
    )
}