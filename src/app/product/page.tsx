import GuideProduct from '@/components/GuideProduct'
import Products from '@/components/Products'
import React from 'react'
import styling from "../about/about.module.css";

const Product = () => {
	return (
		<>
			<section className={`${styling.bg_hero} flex`}>
				<div className="container flex_items_center ">
					<div className="text-center pb-12">
						<p className='uppercase text-red'>Products</p>
						<h1 className='font-bold text-darkBlue'>Browse Through Our Collection
							<span className='text-red block'>Or Talk To Us For Assistance</span></h1>
					</div>
				</div>
			</section>

			<Products />

			<GuideProduct bgColor='bg-navy' />
		</>
	)
}

export default Product
