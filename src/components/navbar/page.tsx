import Link from "next/link";
import Image from "next/image";
import { asset_home } from "../../assets/images";

const NavbarCompt = () => {

	const navLinks = [
		{
			name: 'home',
			url: "/"
		},
		{
			name: 'About',
			url: "/about"
		}, {
			name: 'Products',
			url: "/product"
		}, {
			name: 'technical guide & reference',
			url: "/tech-guide"
		}
	]

	return (
		<nav className="bg-transparent fixed flex items-center w-full py-3 z-10">
			<div className=" flex_center w-full px-14 ">
				<Link href="/" className="">
					<Image src={asset_home.logo} alt="logo" className="w-12" />
				</Link>

				<div className="mx-auto">
					<ul className="flex_items_center  justify-center gap-7">
						{navLinks.map((item, i) => (
							<li key={i} className="text-[15px]">
								<Link href={item.url} className="text-darkBlue uppercase font-semibold">{item.name}</Link>
							</li>
						))}
					</ul>
				</div>

				<Link href={"/contact"} className="bg-red px-5 py-3 text-white font-normal uppercase text-[15px] tracking-widest">Contact</Link>
			</div>
		</nav>
	)
}

export default NavbarCompt
