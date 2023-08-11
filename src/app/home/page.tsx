import { asset_home } from "@/assets/images";
import { cardHome, productAgp } from "../../utils/constants";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/UI/Cta";

const Home = () => {

	return (
		<>
			<section className={`${styles.bg_hero} flex`}>
				<div className="container flex-items-center">
					<div className="mb-8 text-center">
						<p className="uppercase text-darkBlue">
							agp indonesia:
						</p>
						<h1 className="capitalize text-darkBlue font-semibold mb-5">Surabaya's Reliable Source
							<span className="block text-red">For Technical Industrial Supplies</span>
						</h1>
						<p className="uppercase text-red">We serve throughout Indonesia</p>
					</div>
				</div>
			</section >

			<section className="bg-red">
				<div className="container relative">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative -top-36">
						{
							cardHome.map((item, i) => (
								<div key={i} className="relative">
									<Image src={item.imgUrl} alt="card products" className=" object-cover h-full" />
									<Link href={"#"} className="absolute bottom-5 left-5 text-white text-lg lg:text-xl uppercase font-semibold ">{item.text}</Link>
								</div>
							))
						}
					</div>

					<div className="container-content pb-20">
						<div className="md:flex block justify-between items-center gap-14 ">
							<div className="text-white">
								<h3 className="mb-2 tracking-normal">AGP Products <br />
									Guide & Reference</h3>
								<p className="text-base  mb-6 ">Your glossary information for standard <br />
									measurements and specifications</p>
								<Link href={"#"} className="uppercase text-sm font-semibold tracking-widest">view all guide & reference</Link>
							</div>
							<div className="grid grid-cols-3 gap-3 lg:w-3/5 w-auto">
								{productAgp.map((item, i) => (
									<div className="text-center flex-col justify-between mx-auto text-white border px-3 py-16 w-full" key={i}>
										<span className="flex justify-center text-[20px] lg:text-2xl ">
											{item.icon}
										</span>
										<p className="text-[15px]">{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-navy text-white overflow-hidden pt-">
				<div className="container-content2 ps-[8.5%] pe-0 me-auto ">
					<div className="max-w-[45rem] mb-7">
						<h3 className="mb-4">About AGP and the
							<span className="block text-red">successful experience</span>
						</h3>
						<p className="font-normal">We work closely with customers in Surabaya and throughout the country of Indonesia,
							learning the new technological advancement, understanding of the new trends to kept
							updated and be able to come up with comprehensive products that serve modern.</p>
					</div>
					<div className="float-right">
						<div className="">
							<h1></h1>
						</div>
						<Image src={asset_home.coverHero} alt="Background About AGP" className="" />
					</div>
				</div>
			</section>

			<Cta />

		</>
	)
}

export default Home
