
'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, Button, NavbarMenu } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { useMediaQuery } from "react-responsive";


export default function NavbarApp() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [activeLink, setActiveLink] = React.useState('home')
	const isMediumScreen = useMediaQuery({ maxWidth: 640 });

	const handleDownload = () => {
		const fileName = "Resume-LucasChanquia.pdf";
		const fileUrl = `/Cv/${fileName}`;

		const link = document.createElement("a");
		link.href = fileUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<>
			{isMediumScreen ? (
				<Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="z-[500]" isBordered>
					<NavbarContent>
						<NavbarMenuToggle
							aria-label={isMenuOpen ? "Close menu" : "Open menu"}
							className="sm:hidden"
						/>
					</NavbarContent>

					<NavbarContent justify="center">
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

					<NavbarContent justify="end">
						<NavbarItem>
							<Button as={Link} color="primary" href="#" variant="flat" onClick={handleDownload}>
								<i className="fi fi-rr-file-download"></i>
								CV
							</Button>
						</NavbarItem>
					</NavbarContent>
					<NavbarMenu className="z-[500]">
						<NavbarItem isActive={activeLink === 'home'}>
							<Link color={activeLink === 'home' ? 'secondary' : "foreground"} href="#" onClick={() => { setActiveLink("home"); setIsMenuOpen(false) }}>
								Home
							</Link>
						</NavbarItem>
						<NavbarItem>
							<Link color={activeLink === 'jobs' ? 'secondary' : "foreground"} href="#job" onClick={() => { setActiveLink("jobs"); setIsMenuOpen(false) }}>
								Jobs & Projects
							</Link>
						</NavbarItem>

						<NavbarItem>
							<Link color={activeLink === 'contact' ? 'secondary' : "foreground"} href="#contact" onClick={() => { setActiveLink("contact"); setIsMenuOpen(false) }}>
								Contact
							</Link>
						</NavbarItem>

					</NavbarMenu>
				</Navbar>
			) : (
				<Navbar isBlurred maxWidth='full' className="z-[100]">
					<NavbarContent>
						<NavbarBrand>
							<Button as={Link} color="primary" href="#" variant="flat" onClick={handleDownload}>
								<i className="fi fi-rr-file-download"></i>
								CV
							</Button>
						</NavbarBrand>
						<NavbarContent justify="center">
							<NavbarItem isActive={activeLink === 'home'}>
								<Link color={activeLink === 'home' ? 'secondary' : "foreground"} href="#" onClick={() => setActiveLink("home")}>
									Home
								</Link>
							</NavbarItem>
							<NavbarItem>
								<Link color={activeLink === 'jobs' ? 'secondary' : "foreground"} href="#job" onClick={() => setActiveLink("jobs")}>
									Jobs & Projects
								</Link>
							</NavbarItem>

							<NavbarItem>
								<Link color={activeLink === 'contact' ? 'secondary' : "foreground"} href="#contact" onClick={() => setActiveLink("contact")}>
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
			)}
		</>
	)
}