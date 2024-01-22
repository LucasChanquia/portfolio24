"use client";
import { Input } from '@nextui-org/input';
import { useMemo, useState } from "react";
import { Button, Textarea } from "@nextui-org/react";


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
      {/* <div className="bg-[#6E07F3] mx-3 rounded-2xl grid md:grid-cols-2 h-[800px] md:h-[500px] w-full border border-1-indigo-600"> */}
      <div>
        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-white  text-center text-xl pl-4 md:pt-5">
            {`Do you have any questions, ideas, or projects in mind? Don't hesitate to get in touch with me. I look forward to having the opportunity to collaborate with you and create something amazing!`}
          </p>
          <h2 className="text-white text-center text-xl font-bold pt-5">
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
              // placeholder="Enter your name"
              />

              <Input
                value={value.email}
                label="Email"
                type="email"
                name='email'
                className='pb-4'
                variant='underlined'
                // labelPlacement="outside"
                isRequired
                isInvalid={isInvalidMail}
                color={isInvalidMail ? "danger" : "default"}
                errorMessage={isInvalidMail && "Please enter a valid email"}
                // endContent={
                //   <i className="fi fi-rr-envelope text-white"></i>
                // }
                onValueChange={(email) => setValue({ ...value, email })}
              />
            </div>


            {/* <label
              htmlFor="email"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Email
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <Image
                  src="/images/correo2.png"
                  width={20}
                  height={10}
                  alt="correo ico"
                />
              </div>
              <input
                type="email"
                name="email"
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="example@domains.com"
                required
              /> */}
            {/* </div> */}
            {/* <label
              htmlFor="textarea"
              className="text-white text-sm font-bold leading-tight tracking-normal"
            >
              Message
            </label> */}
            <div className="relative mb-5 mt-2">

              <Textarea
                value={value.message}
                isRequired
                type='textarea'
                name='message'
                label="Message"
                variant="bordered"
                labelPlacement="outside"
                // placeholder="Enter your message"
                isInvalid={isInvalidMessage}
                color={isInvalidMessage ? "danger" : "default"}
                errorMessage={isInvalidMessage && "You can only enter 150 characters"}
                className="w-full"
                onValueChange={(message) => setValue({ ...value, message })}
              />
              {/* <textarea
                name="message"
                className="text-black focus:outline-none focus:border focus:border-indigo-700 font-semibold w-full h-[150px] flex items-center pl-3 pt-2 text-sm border-gray-300 rounded border"
                placeholder="I wrote your mesagge"
                required
              /> */}
            </div>
            <input type="hidden" name="_captcha" value="true"></input>
            <div className="flex items-center justify-center w-full">
              <Button type='submit' color='secondary' isDisabled={value.name === '' || value.email === '' || value.message === ''} >
                Submit
              </Button>
              {/* <button 

                type="submit"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-400 bg-indigo-700 rounded text-white font-bold px-8 py-2 text-sm "
              >
                Submit
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
