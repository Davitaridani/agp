import React from 'react'
import Link from "next/link";
import { productAgp } from "../utils/constants";
import CategoryGuide from './CategoryGuide';
import { ImArrowRight2 } from "react-icons/im";

interface bgColor {
	bgColor: string;
}

const GuideProduct: React.FC<bgColor> = ({ bgColor }) => {
	return (
		<>
			<section className={bgColor}>
				<div className="container_content pb-20">
					<div className="md:flex block justify-between items-center gap-14 ">
						<div className="text-white">
							<h3 className="mb-2 tracking-normal">AGP Products <br />Guide & Reference</h3>
							<p className="text-base  mb-6 ">Your glossary information for standard <br />
								measurements and specifications</p>
							<Link href={"#"} className="uppercase text-sm font-semibold tracking-widest hover:underline flex_center gap-2">view all guide & reference <span className='font-semibold text-lg '><ImArrowRight2 /></span></Link>
						</div>
						{/* <div className="grid grid-cols-3 gap-3 lg:w-3/5 w-auto">
							{productAgp.map((item, i) => (
								<div className="text-center flex-col justify-between mx-auto text-white border px-3 py-16 w-full" key={i}>
									<span className="flex justify-center text-[20px] lg:text-2xl ">
										{item.icon}
									</span>
									<p className="text-[15px]">{item.text}</p>
								</div>
							))}
						</div> */}

						<CategoryGuide color="text-white" />
					</div>
				</div>
			</section>
		</>
	)
}

export default GuideProduct
