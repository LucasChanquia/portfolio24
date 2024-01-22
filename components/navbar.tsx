
'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import Image from "next/image";


export default function NavbarApp() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [activeLink, setActiveLink] = React.useState('home')

	return (
		<Navbar isBlurred maxWidth='full' shouldHideOnScroll={true}>
			<NavbarContent>
				<NavbarBrand>
					{/* <p className="hidden sm:block font-bold text-inherit">ACME</p> */}
				</NavbarBrand>
				<NavbarContent justify="center">
					<NavbarItem isActive={activeLink === 'home'}>
						<Link color={activeLink === 'home'? 'secondary' : "foreground"} href="#home" onClick={() => setActiveLink("home")}>
							Home
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color={activeLink === 'jobs'? 'secondary' : "foreground"} href="#job" onClick={() => setActiveLink("jobs")}>
							Jobs & Projects
						</Link>
					</NavbarItem>
					{/* <NavbarItem>
						<Link href="#projects" color={activeLink === 'projects'? 'secondary' : "foreground"} onClick={() => setActiveLink("projects")}>
							Proyects
						</Link>
					</NavbarItem> */}
					<NavbarItem>
						<Link color={activeLink === 'contact'? 'secondary' : "foreground"} href="#contact" onClick={() => setActiveLink("contact")}>
							Contact
						</Link>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent justify="end">
					<NavbarItem>
						<Link color="secondary" href="https://github.com/LucasChanquia" target="_blank">
							<i className="fi fi-brands-github"></i>
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color="primary" href="https://www.linkedin.com/in/lucas-chanquia/" target="_blank">
							<i className="fi fi-brands-linkedin"></i>
						</Link>
					</NavbarItem>
					<ThemeSwitch />
				</NavbarContent>
			</NavbarContent>
		</Navbar>
	)
}