import { asset_home } from "../../../assets/images";
import Image from "next/image";
import Link from "next/link";
import { BiSolidPhoneCall, BiLogoFacebook } from "react-icons/bi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {

	const dataLink = [
		{
			title: "Pages",
			itemLinks: [
				{ link: "Home" },
				{ link: "About" },
				{ link: "Product" },
				{ link: "Guide" }
			]
		},
		{
			title: "About",
			itemLinks: [
				{ link: "Services" },
				{ link: "Solution" },
				{ link: "Team" }
			]
		},
	]

	return (
		<footer className="bg-navy">
			<div className="container text-gray">
				<div className="items__row lg:pt-20 pt-16 pb-10">
					<div className="md:basis-1/4 basis-1/2 mb-4">
						<Image src={asset_home.logo} alt="logo footer" className="w-12 h-12 mb-2" />
						<p className="text-[15px] pe-8 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt maxime consequatur libero minima!</p>
						<div className="flex_center gap-2 text-lg">
							<span>
								<BiLogoFacebook />
							</span>
							<span>
								<GrInstagram />
							</span>
							<span>
								<GrLinkedinOption />
							</span>
						</div>
					</div>
					{dataLink.map((item: any, i: number) => (
						<div className="lg:basis-1/4 basis-1/2 mb-4">
							<h5 className="mb-2 lg:text-xl text-base text-white">{item.title}</h5>
							<ul key={i}>
								{item.itemLinks.map((item: any) => (
									<li className="flex_center mb-2" >
										<Link href={`#`} className="text-sm hover:underline">{item.link}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
					<div className="lg:basis-1/4 basis-1/2 mb-4">
						<h5 className="mb-2 lg:text-xl text-base text-white">Contact</h5>
						<ul>
							<li className="mb-2">
								<Link href={"#"} className="flex_center text-sm hover:underline">
									<span className="pe-2"><MdEmail /></span>
									example.info@email.com
								</Link>
							</li>
							<li className="mb-2">
								<Link href={"#"} className="flex_center text-sm hover:underline">
									<span className="pe-2"><BiSolidPhoneCall /></span>
									+62 222 212 3819
								</Link>
							</li>
							<li className="mb-2">
								<Link href={"#"} className="flex_center">
									<span className="pe-2"><MdLocationPin /></span>
									Jember, Indonesia
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className="my-5 text-zinc-600" />
				<p className="text-center lg:text-sm text-xs pb-7">Copyright © 2023 All rights reserved | This website by Ahmat Davit</p>
			</div>
		</footer >
	)
}

export default Footer
