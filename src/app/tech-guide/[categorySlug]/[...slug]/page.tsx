"use client"

import Image from "next/image"
import numeral from 'numeral';
import { dataProducts } from "../../../../utils/constants";
import styling from "../../guide.module.css";

interface categoryProps {
	slug: any
	id: number
	categorySlug: string
	text: string
	product: {
		id: number
		title: string
		price: number
		type: string
		imgUrl: string
		description: string
	}
}

const DetailProductPage = ({ params }: { params: categoryProps }) => {
	const { slug, categorySlug } = params
	const result = dataProducts.find((item) => item.category === categorySlug)
	if (!result) return <h1>Not Found</h1>
	const filterProducts = result.product.find((item) => item.id == slug[0])
	const resultFormatPrice = numeral(filterProducts?.price).format('0,0')
	return (
		<>
			<section className={`${styling.bg_hero_productDetail} flex h-4 pb-0`}>
				<div className="container flex_items_center">
					<div className="item-center">
						<h1 className="font-bold text-darkBlue lg:text-5xl text-2xl">{filterProducts?.title}</h1>
					</div>
				</div>
			</section >
			<section className="pt-0">
				<div className="container_content lg:px-0 px-[20px]">
					<div className="items__row gap-6">
						<div className="basis-1/3">
							<div className="relative ">
								<Image src={`${filterProducts?.imgUrl}`} alt="product" className="h-full w-full lg:mb-0 mb-3" />
							</div>
						</div>
						<div className="basis-2/3 lg:px-0 px-3">
							<h1 className="lg:text-2xl text-lg capitalize font-semibold mb-3">{filterProducts?.title}</h1>
							<p>Type: <span className="font-semibold">{filterProducts?.type}</span></p>
							<p>Rp. <span className="font-semibold">{resultFormatPrice}</span> </p>
							<p className="w-auto lg:w-3/4 mt-3">{filterProducts?.description}</p>
							<ul className="mt-5">
								<li><span>*Harga dan stock tidak terikat</span></li>
								<li><span>*Harga tidak termasuk ongkos kirim</span></li>
								<li><span>*Harga tidak termasuk PPN 10%</span></li>
							</ul>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default DetailProductPage


