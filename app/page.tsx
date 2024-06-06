'use client'

import 'styles/styles.css'
import { title } from "@/components/primitives";
import { useState } from 'react';
import { useLayoutEffect } from "react";
import style from "../styles/pageStyles.module.css"
import Image from "next/image";
import Marquee from "@/components/Skill.component";
import { JobsCard } from "@/components/Jobs.component";
import { ProjectsCard } from '@/components/Project.component';
import { jobs } from "@/components/Utils/JobsItem";
import { projects } from '@/components/Utils/ProjectsItem';
import { Shadows_Into_Light } from 'next/font/google';
import { Comfortaa } from 'next/font/google';
import { Caveat } from 'next/font/google';
import { Contact } from '@/components/Contact.component';
import { Analytics } from '@vercel/analytics/react';


const shadow = Shadows_Into_Light({ weight: '400', subsets: ['latin'] })
const comfortaa = Comfortaa({ weight: '400', subsets: ['latin'] })
const caveat = Caveat({ weight: '400', subsets: ['latin'] })

export type CardProps = {
	id: number
	name: string
	image: string[]
	description: string
	skill: string[]
	url?: string
	git?: string
	youtube?: string
}


export default function Home() {
	const [showTitle, setShowTitle] = useState('');


	useLayoutEffect(() => {
		const titleText = "Hi! I'm Lucas Chanquía";
		let index = 0;

		const intervalId = setInterval(() => {
			setShowTitle(titleText.substring(0, index + 1));
			index++;

			if (index === titleText.length) {
				clearInterval(intervalId);
			}
		}, 100);

		return () => clearInterval(intervalId);
	}, []);

	
	  

	return (
		<>
			<section className="w-full h-full">
				<article id="#" className='pb-[20px]'>
					<div className="grid md:grid-cols-4 h-full justify-center gap-4">
						<div className="col-span-3 gap-2 ">
							<h1 className={title()}>{showTitle}</h1>
							<br />
							<br />
							<h2 className={`${title({ color: "violet" })} ${caveat.className} ${style.fadeIn}`}>Frontend developer</h2>

							<br />
							<span className={`${title({ color: "blue" })} ${shadow.className} text-[20px]`}>{`< About Me >`}</span>
							<span className="text-[40px] text-violet-500 px-3">{`I`}</span>
							<span className="text-[18px] text-justify">am a front-end web development professional based in Córdoba, Argentina, with two years of industry experience. I enjoy tackling complex challenges, continuously learning, and adapting to the latest technological trends, especially when working in a team.
								<br /> As a freelancer, I aim to be responsible and responsive, always striving to exceed expectations and provide innovative solutions. I am committed to constant growth and delivering high-quality services.</span>
							<span className={`${title({ color: "blue" })} ${shadow.className} text-[20px] pl-2`}>{`</ About Me >`}</span>
						</div>
						<div className="col-span-3 md:col-span-1 md:h-auto rounded-6 w-full mx-auto">
							<Image src='/image/perfil/Vector.webp' alt="Imagen de perfil" width={300} height={500} className='m-auto' />
						</div>
					</div>

					<Marquee />
				</article> 

				<article id='job' className='pt-[60px]'>
					<div className='w-full h-full pb-[20px] border-b border-b-violet-700'>
						<h3 className={`${title({ color: "blue" })} ${comfortaa.className} text-[30px] pl-[20px]`}>{`< Jobs />`}</h3>
						<article className='w-full'>
							{jobs.map(({ id, name, image, description, skill, url, youtube, git }: CardProps) => (
								<JobsCard key={id} id={id} name={name} image={image} description={description} skill={skill} url={url} youtube={youtube} git={git}/>
							))}
						</article>
					</div>

					<div className='py-[20px] border-b border-b-violet-700'>
						<h3 className={`${title({ color: "blue" })} ${comfortaa.className} text-[30px] py-[20px] flex justify-end px-[20px]`}>{`< Projects />`}</h3>
						<article className='w-full'>
							{projects.map(({ id, name, image, description, skill, url, git }: CardProps) => (
								<ProjectsCard key={id} id={id} name={name} image={image} description={description} skill={skill} url={url} git={git} />
							))}
						</article>
					</div>

					<article id='contact' className='w-full'>
						<Contact />
					</article>
				</article>
			</section>
			<Analytics />
		</>
	);
}
