
import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import NavbarApp from "@/components/navbar";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ weight: '200', subsets: ['latin'] })
  
  
 export const metadata: Metadata = {
 	title: 'Lucas Chanquía ~ Portfolio',
 	description: 'Sobre mi, Trabajos & Proyectos, Contacto & Redes sociales',
 	icons: {
 		icon: "/Vector.ico",
 		shortcut: '/Vector.ico',
 		apple: '/Vector.ico'
 	},
 };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background antialiased",
					inter.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col">
						
						<NavbarApp />
						
						
						<main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center pt-5 pb-2">
							<p> © 2025 Copyright <span>Lucas Chanquía</span></p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
