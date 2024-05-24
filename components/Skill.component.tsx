import javascript from "/public/svg/javascript.svg";
import typescript from "/public/svg/typescript.svg";
import css from "/public/svg/css.svg";
import figma from "/public/svg/figma.svg";
import git from "/public/svg/github2.svg";
import html from "/public/svg/html.svg";
import mongo from "/public/svg/mongo.svg";
import node from "/public/svg/node.svg";
import php from "/public/svg/php.svg";
import postgres from "/public/svg/postgres.svg";
import react from "/public/svg/react.svg";
import sass from "/public/svg/sass.svg";
import vite from "/public/svg/vite.svg";
import msql from "/public/svg/mysql.svg";
import next from "/public/svg/next.svg";
import Image from "next/image";

 export const skill = [
  {
    id: 1,
    name: javascript,
  },
  {
    id: 2,
    name: typescript,
  },
  {
    id: 3,
    name: next,
  },
  {
    id: 4,
    name: html,
  },
  {
    id: 5,
    name: css,
  },
  {
    id: 6,
    name: figma,
  },
  {
    id: 7,
    name: git,
  },
  {
    id: 8,
    name: sass,
  },
  {
    id: 9,
    name: react,
  },
  {
    id: 10,
    name: node,
  },
  {
    id: 11,
    name: postgres,
  },
  {
    id: 12,
    name: mongo,
  },
  {
    id: 13,
    name: msql,
  },
  {
    id: 14,
    name: php,
  },
  {
    id: 15,
    name: vite,
  },
];

const skill1 = [
    {
        id: 1,
        name: javascript,
      },
      {
        id: 2,
        name: typescript,
      },
      {
        id: 3,
        name: next,
      },
      {
        id: 4,
        name: html,
      },
      {
        id: 5,
        name: css,
      },
      {
        id: 6,
        name: figma,
      },
      {
        id: 7,
        name: git,
      },
]

const skill2 = [
  {
    id: 8,
    name: sass,
  },
  {
    id: 9,
    name: react,
  },
  {
    id: 10,
    name: node,
  },
  {
    id: 11,
    name: postgres,
  },
  {
    id: 12,
    name: mongo,
  },
  {
    id: 13,
    name: msql,
  },
  {
    id: 14,
    name: php,
  },
  {
    id: 15,
    name: vite,
  },
];

const Marquee = () => {

  const isViewportSmall = () => {
		if(typeof window !== 'undefined'){
			return window.innerWidth < 640; 
		}
		return false
	  };

		  return (
        <>
        { isViewportSmall() ? (
          <>
          <div className="pt-[20px]">
			  <div className="flex flex-wrap gap-3 justify-center">
				{skill.map((e: any) => (
				  <div key={e.id} className="mx-auto">
					<Image src={e.name} alt={e.name} width={100} height={100} className="hover:scale-110 p-2" />
				  </div>
				))}
			  </div>
			</div>
          </>
          
        ) : (
          <>
          <div className="overflow-hidden whitespace-nowrap pt-[20px]">
      <div className="inline-block animate-marquee">
        <div className="flex gap-[50px] h-[200px]">
          {skill1.map((e, index) => (
            <div key={`${e.id}-${index}`} className="mx-auto w-[150px]">
              <Image
                src={e.name}
                alt={e.name}
                width={150}
                height={150}
                className="hover:scale-110 p-2 w-[200px]"
              />
            </div>
          ))}
          {skill1.map((e, index) => (
            <div key={`${e.id}-duplicate-${index}`} className="mx-auto w-[150px]">
              <Image src={e.name} alt={e.name} width={200} height={200} className="hover:scale-110 p-2 w-[200px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap pt-[20px]">
        <div className="inline-block animate-marquee2">
          <div className="flex gap-[50px] h-[200px]">
          {skill2.concat(skill2).map((e, index) => (
              <div key={`skill2-${e.id}-${index}`} className="mx-auto w-[150px]">
                <Image
                  src={e.name}
                  alt={e.name}
                  width={150}
                  height={150}
                  className="hover:scale-110 p-2 w-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
        )
      }
      </>

      )
        
};

export default Marquee;
