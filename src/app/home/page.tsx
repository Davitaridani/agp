import { asset_home } from "@/assets/images";
import { cardHome, productAgp } from "../../utils/constants";
import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";
import Products from "@/components/Products";
import GuideProduct from "@/components/GuideProduct";

const Home = () => {

	return (
		<>
			<section className={`${styles.bg_hero} flex`}>
				<div className="container flex_items_center">
					<div className="mb-8 text-center">
						<p className="uppercase text-darkBlue">
							agp indonesia:
						</p>
						<h1 className="capitalize text-red font-semibold mb-5">Surabaya's Reliable Source
							<span className="block text-darkBlue">For Technical Industrial Supplies</span>
						</h1>
						<p className="uppercase text-red text-sm font-semibold">We serve throughout Indonesia</p>
					</div>
				</div>
			</section >

			<Products />

			<GuideProduct bgColor="bg-red pt-0 pb-0" />

			<section className="bg-navy text-white overflow-hidden lg:pt-28 py-20">
				<div className="container-content2 lg:ps-[8.5%] lg:pe-0 me-auto ">
					<div className="items__row">
						<div className="basis-3/5 lg:mb-0 mb-[18rem] px-[20px] lg:px-0">
							<div className="max-w-[45rem] mb-7">
								<h3 className="mb-4">About AGP and the
									<span className="block text-red">successful experience</span>
								</h3>
								<p className="font-light">We work closely with customers in Surabaya and throughout the country of Indonesia,
									learning the new technological advancement, understanding of the new trends to kept
									updated and be able to come up with comprehensive products that serve modern.</p>
							</div>
						</div>
						<div className="basis-2/5 mx-auto relative flex justify-center lg:mr-16 mr-0 lg:bottom-auto bottom-[15.5rem] lg:left-auto left-10">
							<div className="bg-red text-center w-60 mx-auto p-8 absolute justify-center flex-col bg-opacity-60">
								<h5 className="uppercase tracking-widest lg:text-base text-[15px] lg:mb-8 mb-5">AGP at a glance</h5>
								<div className="text-center">
									<h4 className="lg:text-3xl text-2xl">10,000+</h4>
									<p className="text-sm">Product SKU Collection</p>
									<hr className="lg:my-6 my-4 w-8 mx-auto" />
									<h4 className="lg:text-3xl text-2xl">200+</h4>
									<p className="text-sm">Implemented projects in Indonesia</p>
									<hr className="lg:my-6 my-4 w-8 mx-auto" />
									<h4 className="lg:text-3xl text-2xl">5000+</h4>
									<p className="text-sm">Satisfied customers</p>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:float-right">
						<Image src={asset_home.coverHero} alt="Background About AGP" className="lg:h-auto h-64 object-cover" />
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
