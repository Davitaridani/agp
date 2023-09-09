import React from 'react'
import Image from 'next/image'
import { asset_about } from "../../assets/images/";
import { iconAbout } from "../../utils/constants";
import styling from "./about.module.css";

const About = () => {
	return (
		<>
			<section className={`${styling.bg_hero} flex items-end pb-16`} >
				<div className="container">
					<div className="text-center">
						<p className='uppercase text-red font-semibold text-base'>About US</p>
						<h1 className='font-bold text-darkBlue leading-[1]'>Customer At Surabaya & Throughout
							<span className='block'> The Country Choose AGP,</span>
							<span className='text-red block'>Then Remain For The Long Term </span></h1>
					</div>
				</div>
			</section >

			<section className='bg-darkBlue'>
				<div className="container text-white">
					<div className="items__row justify-center gap-12">
						<div className="basis-2/5 mb-8 lg:mb-0">
							<div className="">
								<h3 className='font-light mb-4'>
									<span className='font-semibold block'>Passion in what we do</span>
									is the base of our expertise</h3>
								<p className='mb-4'>From the very beginning, the AGP’s purpose was to supply
									the best innovative technical products. Tireless and
									determined with high level of technical flair, AGP offer not
									just general supplies, instead we are the most comprehensive
									supplier in the gas & pipe peripherals.</p>
								<p className='mb-4'>PT. ABADI GEMILANG PERKASA (AGP) serve as your trusted partner for industrial supplier not just in West of Surabaya, but we serve whole Surabaya, Gresik, Mojokerto, Sidoarjo and throughout the nation. We committed to bring only the best quality products of ready stock and event special made products of various pipes, fittings and valves.</p>
								<p className='mb-4'>Some of the most common product that we are known for are: Steel Pipes, Stainless Steel Pipes, PVC Pipe & Fittings, Elbow Fittings, Flanges, Valves, Steel Plates, Profile Steel, Round Bar (As),  Engineering Plastics, Coupling, Asahi AV Thermoplastic Pipe and Valves, Mitsubishi Brake and Clutch.</p>
							</div>
						</div>
						<div className="basis-2/5">
							<Image src={asset_about.profileAbout}
								alt="Image Profile" />
						</div>
					</div>
				</div>
			</section>

			<section >
				<div className="container_content lg:px-0 px-[20px]">
					<div className="mb-8 w-auto md:w-9/12 mx-auto text-center">
						<h3 className='text-red leading-[1.2] font-bold mb-8'>
							<span className='block text-darkBlue font-normal'>The Right Partner In Supplies</span>
							Will Get Your Project A Successful One</h3>
						<p>The right partner will help you pave your way to success. As an active supplier, we are ready to be involved with your project specificators to provide the best solutions, creating new ways to make your project efficient and successful. We will come up with suggestion, detailed information on quality, product differentiation and other insighful information. We work closely with customers in Surabaya and throughout the country of Indonesia, learning the new technological advancement, understanding of the new trends to kept updated and be able to come up with comprehensive products that serve the modern industrial market.</p>
					</div>

					<div className="items-center text-center">
						<h5 className='uppercase mb-7 font-semibold'>AGP at a glance</h5>
						<div className="flex flex-row">
							{iconAbout.map((item, index) => (
								<div className="md:basis-2/6 basis-full flex justify-center" key={index}>
									<div className="text-center">
										<Image src={item.icon} alt='icon' className='mx-auto lg:w-12 w-9 lg:mb-4 mb-2' />
										<p className='text-red lg:text-2xl text-xl font-semibold'>{item.count}</p>
										<h5 className='text-sm'>{item.text}</h5>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className={`${styling.bg_cover_about} flex items-center py-0`}>
				<div className="container_content lg:px-0 px-[20px]">
					<h3 className="text-center text-white lg:mb-8 mb-5">AGP <span className='block text-red lg:mt-1'>Vision & Mision
					</span></h3>
					<div className="items__row justify-center gap-8 text-white text-center">
						<div className="basis-1/2 ">
							<h5 className='text-red text-xl mb-3 tracking-wider'>Vision</h5>
							<p className=''>To become the leading company in Indonesia in the sales of pipes, valves, couplings, clutches, and related products, with a focus on offering the most comprehensive range of products and delivering the best service.</p>
						</div>
						<div className="md:border-r border-b border-gray lg:my-0 my-6" />
						<div className="basis-1/2">
							<h5 className='text-red text-xl mb-3 tracking-wider'>Mision</h5>
							<p>To become the leading company in Indonesia in the sales of pipes, valves, couplings, clutches, and related products, with a focus on offering the most comprehensive range of products and delivering the best service. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat delectus incidunt numquam?</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
