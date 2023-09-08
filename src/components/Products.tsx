import React from 'react'
import { cardHome } from "../utils/constants";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
	return (
		<>
			<section className="bg-red">
				<div className="container relative">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative -top-36">
						{cardHome.map((item, i) => (
							<div key={i} className="relative">
								<Image src={item.imgUrl} alt="card products" className=" object-cover h-full" />
								<Link href={`/tech-guide/${item.category}`} className="absolute bottom-5 left-5 text-white text-lg lg:text-xl uppercase font-semibold ">{item.text}</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Products
