"use client";
import { Input } from '@nextui-org/input';
import { useMemo, useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import Link from 'next/link';
import { title } from "@/components/primitives";
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({ weight: '400', subsets: ['latin'] })

export function Contact() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const validateName = (value: string) => value.match(/^[A-Za-z\s]{1,20}$/);
  const validateEmail = (value: string) => value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
  const validateMessage = (value: string) => value.match(/^[A-Za-z\s]{1,150}$/);

  
  const isInvalidMail = useMemo(() => {
    
    if (value.name === '') return false

    return validateEmail(value.email) ? false : true;

  }, [value.email]);

  const isInvalidName = useMemo(() => {

    if (value.name === '') return false

    return validateName(value.name) ? false : true;

  }, [value.name]);

  const isInvalidMessage = useMemo(() => {

    if (value.message === '') return false

    return validateMessage(value.message) ? false : true;

  }, [value.message]);



  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-center text-xl pl-4 md:pt-5">
           { `Do you have any questions, ideas, or projects in mind? Don't hesitate to get in touch with me. I look forward to having the opportunity to collaborate with you and create something amazing!`}
          </p>
          <h2 className={`${title({ color: "blue" })} ${comfortaa.className} text-[20px] pt-2`} >
            Contact me!
          </h2>
        </div>
        <div className="justify-center p-5">
          <form
            action="https://formsubmit.co/lucaschanquia@gmail.com"
            method="POST"
          >
            <div className='grid grid-cols-2 gap-5'>
              <Input
                value={value.name}
                type="text"
                name='name'
                label='Name'
                variant='underlined'
                isRequired
                isInvalid={isInvalidName}
                color={isInvalidName ? "danger" : "default"}
                errorMessage={isInvalidName && "You can only enter 20 characters"}
                onValueChange={(name) => setValue({ ...value, name })}
                className="pb-4"
              />

              <Input
                value={value.email}
                label="Email"
                type="email"
                name='email'
                className='pb-4'
                variant='underlined'
                isRequired
                isInvalid={isInvalidMail}
                color={isInvalidMail ? "danger" : "default"}
                errorMessage={isInvalidMail && "Please enter a valid email"}
                onValueChange={(email) => setValue({ ...value, email })}
              />
            </div>

            <div className="relative mb-5 mt-2">

              <Textarea
                value={value.message}
                isRequired
                name='message'
                label="Message"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={isInvalidMessage}
                color={isInvalidMessage ? "danger" : "default"}
                errorMessage={isInvalidMessage && "You can only enter 150 characters"}
                className="w-full"
                onValueChange={(message) => setValue({ ...value, message })}
              />

            </div>

            <div className="flex items-center justify-center w-full">
              <Button type='submit' color='secondary' isDisabled={isInvalidMail || isInvalidName || isInvalidMessage} >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div>
          <p className='text-center pb-[20px]'>Or</p>
          <Button as={Link} href="https://wa.me/5493515118325/?text=Hola!%20Vi%20tu%20portfolio%20y%20estoy%20interesado%20en%20conectar%20contigo" color='success' target='_blank' className='flex w-[200px] mx-auto'>
            Whatsapp 
            <i className='fi fi-brands-whatsapp'></i>
          </Button>
        </div>
      </div>
    </>
  );
};
