"use client";

import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarBrand,
} from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";


export default function NavbarApp() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("home");

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered  className="z-[100]">
        <NavbarContent className="sm:hidden" justify="start">
          
          <NavbarMenuToggle />
        
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">

        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="center">
          <NavbarItem className="w-[24px] h-[24px]">
            <Link
              color="secondary"
              href="https://www.github.com/LucasChanquia"
              target="_blank"
            >
              <i className="fi fi-brands-github"></i>
            </Link>
          </NavbarItem>
          <NavbarItem className="w-[24px] h-[24px]">
            <Link
              color="primary"
              href="https://www.linkedin.com/in/lucas-chanquia/"
              target="_blank"
            >
              <i className="fi fi-brands-linkedin"></i>
            </Link>
          </NavbarItem>
          {/* <ThemeSwitch /> */}
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive={activeLink === "home"}>
            <Link
              color={activeLink === "home" ? "secondary" : "foreground"}
              href="/"
              onClick={() => setActiveLink("home")}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color={activeLink === "jobs" ? "secondary" : "foreground"}
              href="/jobs"
              onClick={() => setActiveLink("jobs")}
            >
              Jobs
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color={activeLink === "projects" ? "secondary" : "foreground"}
              href="/projects"
              onClick={() => setActiveLink("projects")}
            >
             Projects
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color={activeLink === "contact" ? "secondary" : "foreground"}
              href="/#contact"
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem className="w-[24px] h-[24px]">
            <Link
              color="secondary"
              href="https://www.github.com/LucasChanquia"
              target="_blank"
            >
              <i className="fi fi-brands-github"></i>
            </Link>
          </NavbarItem>
          <NavbarItem className="w-[24px] h-[24px]">
            <Link
              color="primary"
              href="https://www.linkedin.com/in/lucas-chanquia/"
              target="_blank"
            >
              <i className="fi fi-brands-linkedin"></i>
            </Link>
          </NavbarItem>
          {/* <ThemeSwitch /> */}
        </NavbarContent>

        <NavbarMenu>
          <NavbarItem isActive={activeLink === "home"}>
            <Link
              color={activeLink === "home" ? "secondary" : "foreground"}
              href="/"
              onClick={() => {
                setActiveLink("home");
                setIsMenuOpen(false);
              }}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color={activeLink === "jobs" ? "secondary" : "foreground"}
              href="/jobs"
              onClick={() => {
                setActiveLink("jobs");
                setIsMenuOpen(false);
              }}
            >
              Jobs
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color={activeLink === "projects" ? "secondary" : "foreground"}
              href="/projects"
              onClick={() => {
                setActiveLink("projects");
                setIsMenuOpen(false);
              }}
            >
              Projects
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              color={activeLink === "contact" ? "secondary" : "foreground"}
              href="#contact"
              onClick={() => {
                setActiveLink("contact");
                setIsMenuOpen(false);
              }}
            >
              Contact
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>

    
    </>
  );
}