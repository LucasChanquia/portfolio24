"use client";
import { Input } from "@nextui-org/input";
import { useMemo, useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import { Shadows_Into_Light } from "next/font/google";
import { title } from "@/components/primitives";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: "400", subsets: ["latin"] });
const shadow = Shadows_Into_Light({ weight: "400", subsets: ["latin"] });

export function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateName = (value: string) => value.match(/^[A-Za-z\s]{1,20}$/);
  const validateEmail = (value: string) =>
    value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
  const validateMessage = (value: string) => value.match(/^[A-Za-z\s]{1,150}$/);

  const isInvalidMail = useMemo(() => {
    if (value.name === "") return false;

    return validateEmail(value.email) ? false : true;
  }, [value.email]);

  const isInvalidName = useMemo(() => {
    if (value.name === "") return false;

    return validateName(value.name) ? false : true;
  }, [value.name]);

  const isInvalidMessage = useMemo(() => {
    if (value.message === "") return false;

    return validateMessage(value.message) ? false : true;
  }, [value.message]);

  return (
    <>
      <div className="bg-slate-800 rounded-md p-5">
        <span
          className={`${title({ color: "blue" })} ${
            shadow.className
          } text-[20px]`}
        >{`< Contact >`}</span>

        <div className="sm:grid sm:grid-cols-2 ">
          <div className="flex flex-col items-center justify-center p-2">
            <p className="text-center text-xl p-4 md:pt-5 bg-slate-700 rounded-md">
              {`Do you have any questions, ideas, or projects in mind? Don't hesitate to get in touch with me. I look forward to having the opportunity to collaborate with you and create something amazing!`}
            </p>
            <h2
              className={`${title({ color: "blue" })} ${
                comfortaa.className
              } text-[20px] pt-2`}
            >
              Contact me!
            </h2>
          </div>
          <div className="justify-center px-5 pb-5 ">
            <form
              action="https://formsubmit.co/lucaschanquia@gmail.com"
              method="POST"
              onSubmit={() => {
                setLoading(true);
              }}
            >
              <div className="grid grid-cols-2 gap-5">
                <Input
                  value={value.name}
                  type="text"
                  name="name"
                  label="Name"
                  variant="underlined"
                  isRequired
                  isInvalid={isInvalidName}
                  color={isInvalidName ? "danger" : "primary"}
                  errorMessage={
                    isInvalidName && "You can only enter 20 characters"
                  }
                  onValueChange={(name) => setValue({ ...value, name })}
                  className="pb-4"
                />

                <Input
                  value={value.email}
                  label="Email"
                  type="email"
                  name="email"
                  className="pb-4"
                  variant="underlined"
                  isRequired
                  isInvalid={isInvalidMail}
                  color={isInvalidMail ? "danger" : "primary"}
                  errorMessage={isInvalidMail && "Please enter a valid email"}
                  onValueChange={(email) => setValue({ ...value, email })}
                />
              </div>

              <div className="relative mb-5 mt-2">
                <Textarea
                  value={value.message}
                  isRequired
                  name="message"
                  label="Message"
                  variant="bordered"
                  labelPlacement="outside"
                  isInvalid={isInvalidMessage}
                  color={isInvalidMessage ? "danger" : "primary"}
                  errorMessage={
                    isInvalidMessage && "You can only enter 150 characters"
                  }
                  className="flex w-full md:w-[80%] md:mx-auto"
                  onValueChange={(message) => setValue({ ...value, message })}
                />
              </div>

              <div className="flex items-center justify-center w-full">
                <Button
                  type="submit"
                  color="secondary"
                  isLoading={loading}
                  isDisabled={
                    isInvalidMail || isInvalidName || isInvalidMessage
                  }
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
          {/* <div>
          <p className='text-center pb-[20px]'>Or</p>
          <div className='flex gap-4 justify-center'>
            <Button as={Link} href="https://wa.me/5493515118325/?text=Hola!%20Vi%20tu%20portfolio%20y%20estoy%20interesado%20en%20conectar%20contigo" color='success' target='_blank' radius='full'>
              <i className='fi fi-brands-whatsapp'></i>
            </Button>
            <Button as={Link} href="https://www.t.me/lucasChanquia" color='primary' target='_blank' radius='full'>
              <i className='fi fi-brands-telegram'></i>
            </Button>
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
}
