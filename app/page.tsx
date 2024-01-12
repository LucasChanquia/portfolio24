'use client'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import style from "../styles/pageStyles.module.css"
import Image from "next/image";
import javascript from '/public/svg/javascript.svg'
import typescript from '/public/svg/typescript.svg'
import css from '/public/svg/css.svg'
import figma from '/public/svg/figma.svg'
import git from '/public/svg/github2.svg'
import html from '/public/svg/html.svg'
import mongo from '/public/svg/mongo.svg'
import msql from '/public/svg/msql.svg'

export default function Home() {
	const [showTitle, setShowTitle] = useState('');

	useEffect(() => {


		const titleText = "Hi! I'm Lucas Chanquía";
		let index = 0;

		const intervalId = setInterval(() => {
			setShowTitle(titleText.substring(0, index + 1));
			index++;

			if (index === titleText.length) {
				clearInterval(intervalId);
			}

		}, 50);

		// Limpia el intervalo cuando el componente se desmonta
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<section id="home" className="grid grid-cols-1 md:grid-cols-4 justify-center gap-4 py-8 md:py-10 w-full h-screen">
				<div className="col-span-3 gap-2  ">
					<h1 className={title()}>{showTitle}</h1>
					<br/>
					<h2 className={`${title({ color: "violet" })} ${style.fadeIn}`}>Front End developer & designer</h2>
					<br/>
					<br/>
					<br/>
					<span className={`${title({color: "blue" })} ${style.about} `}>{`< About Me >`}</span>
						<span className="text-[40px] text-violet-600">{`I´`}</span>
						<span className="text-[18px] text-justify">am a front-end web development professional based in Córdoba, Argentina, with two years of industry experience. I love tackling complex challenges and continuously learning, especially when it comes to working in a team.<br/> As a freelancer, I strive to be responsible and responsive, always aiming to exceed expectations and provide creative and innovative solutions. I am committed to constant growth and delivering high-quality products.</span>
					<span className={`${title({color: "blue" })} ${style.about}`}>{`< About Me />`}</span>
				</div>
				<div className="relative w-auto h-auto rounded-6">
					<Image src='/image/perfil/vector.png' alt="Imagen de perfil" width={300} height={500} />
				</div>
				<div className="flex gap-3">	
					<Image src={javascript} alt="Javascript" width={100} height={100} />
					<Image src={typescript} alt="Typescript" width={100} height={100} />
					<Image src={css} alt="CSS" width={100} height={100} />
					<Image src={figma} alt="Figma" width={100} height={100} />
					<Image src={git} alt="Github" width={100} height={100} />
					<Image src={html} alt="HTML" width={100} height={100} />
					<Image src={mongo} alt="Mongo" width={100} height={100} />
					<Image src={msql} alt="MySQL" width={100} height={100} />
				</div>
			</section>
			<section id="about" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full h-screen">

				<div>

				</div>
			</section>
		</>

	);
}
