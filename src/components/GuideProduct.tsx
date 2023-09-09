import React from 'react'
import Link from "next/link";
import CategoryGuide from './CategoryGuide';
import { ImArrowRight2 } from "react-icons/im";

interface bgColor {
	bgColor: string;
}

const GuideProduct: React.FC<bgColor> = ({ bgColor }) => {
	return (
		<>
			<section className={`${bgColor}`}>
				<div className="container_content px-[20px] lg:px-0 pb-20">
					<div className="md:flex block justify-between items-center gap-14">
						<div className="text-white">
							<h3 className="mb-2 tracking-normal">AGP Products <br />Guide & Reference</h3>
							<p className="text-base  mb-6 ">Your glossary information for standard <br />
								measurements and specifications</p>
							<Link href={"/tech-guide"} className="uppercase text-sm font-semibold tracking-widest hover:underline flex_center gap-2 lg:mb-0 mb-10">view all guide & reference <span className='font-semibold text-lg '><ImArrowRight2 /></span></Link>
						</div>
						<CategoryGuide color="text-white" />
					</div>
				</div>
			</section>
		</>
	)
}

export default GuideProduct
