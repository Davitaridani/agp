"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { asset_home } from "../../../assets/images";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const NavbarCompt = () => {

	const [isScroll, setIsScroll] = useState(false)
	const [menuMobile, setMenuMobile] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const navLinks = [
		{
			name: 'home',
			url: "/"
		},
		{
			name: 'About',
			url: "/about"
		},
		{
			name: 'Products',
			url: "/product"
		},
		{
			name: 'guide & reference',
			url: "/tech-guide"
		},
		{
			name: 'News',
			url: "/news"
		}
	]

	return (
		<>
			<nav className={`fixed hidden md:flex items-center w-full transition-all duration-1000 ease-in-out py-3 z-10 ${isScroll ? 'bg-white shadow-md' : 'bg-transparent'}`}>
				<div className="flex_center w-full lg:px-14 px-5">
					<Link href="/">
						<Image src={asset_home.logo} alt="logo agp" className="w-12" />
					</Link>

					<div className="mx-auto lg:flex hidden">
						<ul className="flex_items_center justify-center gap-7">
							{navLinks?.map((item, i) => (
								<li key={i} className="text-[15px]">
									<Link href={item.url} className="text-darkBlue uppercase font-semibold lg:text-base text-sm">{item.name}</Link>
								</li>
							))}
						</ul>
					</div>

					<Link href={"/contact"} className="bg-red px-5 py-3 text-white font-normal uppercase text-[15px] tracking-widest lg:flex hidden">Contact</Link>
				</div>
			</nav >

			<nav className={`fixed flex md:hidden items-center w-full transition-all duration-1000 ease-in-out pt-3 pb-4 z-10  backdrop-blur-[3px] shadow-md ${isScroll ? 'bg-white' : 'backdrop-blur-[3px]'}`}>

				<div className="flex_center w-full lg:px-14 px-5">
					<Link href="/">
						<Image src={asset_home.logo} alt="logo agp" className="w-12" />
					</Link>

					<div className="lg:hidden flex flex-col justify-end items-center">
						<button onClick={() => setMenuMobile(!menuMobile)} className="absolute top-[19px] right-4">
							{menuMobile ? (
								<span className="text-[28px] text-darkBlue">
									<MdOutlineClose />
								</span>
							) : (
								<span className="text-[28px] text-darkBlue">
									<HiMenuAlt3 />
								</span>
							)}
						</button>
						<div className={`${menuMobile ? "flex flex-col" : "hidden"
							} pt-4 pb-8 absolute top-16 right-0 min-w-full z-50 px-5 transition-all duration-1000 ease-in-out backdrop-blur-[3px] ${isScroll ? 'bg-white shadow-md' : 'backdrop-blur-3xl'}`}>
							<ul className="flex flex-col justify-center gap-3">
								{navLinks?.map((item, i) => (
									<li key={i} className="text-[15px]">
										<Link onClick={() => setMenuMobile(!menuMobile)} href={item.url} className="text-darkBlue uppercase font-semibold lg:text-base text-[13px] transition-all duration-1000 ease-in-out">{item.name}</Link>
									</li>
								))}
							</ul>
						</div>

						<Link href={"/contact"} className="bg-red px-5 py-3 text-white font-normal uppercase text-[15px] tracking-widest lg:flex hidden">Contact</Link>

					</div>
				</div>

			</nav>

		</>
	)
}

export default NavbarCompt
