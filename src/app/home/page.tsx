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
					<div className="">
						<p className="uppercase text-darkBlue">
							agp indonesia:
						</p>
						<h1 className="capitalize text-darkBlue">Surabaya's Reliable Source
							<span className="block text-red">For Technical Industrial Supplies</span>
						</h1>
						<p className="uppercase">We serve throughout Indonesia</p>
					</div>
				</div>
			</section >

			<section className="bg-red">
				<div className="container">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
						{
							cardHome.map((item, i) => (
								<div key={i}>
									<Image src={item.imgUrl} alt="card products" />
									<p>{item.text}</p>
								</div>
							))
						}
					</div>

					<div className="container-content">
						<div className="md:flex block justify-around">
							<div className="">
								<h3>AGP Products
									Guide & Reference</h3>
								<p>Your glossary information for standard
									measurements and specifications</p>
								<Link href={"#"} className="uppercase">view all guide & reference</Link>
							</div>
							<div className="grid grid-cols-3">
								{productAgp.map((item, i) => (
									<div className="text-center flex-col justify-center mx-auto" key={i}>
										<span className="flex justify-center">
											{item.icon}
										</span>
										<p>{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-navy text-white overflow-hidden">
				<div className="">
					<div className="container-content2 ps-[8.5%] pe-0 me-auto ">
						<div className="max-w-[45rem]">
							<h3>About AGP and the
								<span className="block">successful experience</span>
							</h3>
							<p>We work closely with customers in Surabaya and throughout the country of Indonesia,
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
				</div>
			</section>

			<Cta />

		</>
	)
}

export default Home
