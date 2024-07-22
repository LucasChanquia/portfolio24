import Image from "next/image";
import { skill } from "@/types/skill";

const Skills = () => {
  return (
    <>
      
        <div className="flex flex-wrap gap-1 justify-center h-[90%]">
          {skill.map(({ id, name, skill }) => (
            <div key={id} className="mx-auto">
              <Image
                src={name}
                alt={name}
                width={80}
                height={80}
                className="hover:scale-110 p-2 w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] m-auto"
              />
              <span className={`flex justify-center text-[12px] sm:text-[18px]`}>{skill}</span>
            </div>
          ))}
        </div>
     
    </>
  );
};

export default Skills;
