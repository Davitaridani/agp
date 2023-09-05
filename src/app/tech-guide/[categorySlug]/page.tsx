"use client"

import Image from "next/image";
import styling from "../guide.module.css";
import { dataProducts } from "../../../utils/constants";
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Category {
	id: number;
	categorySlug: string;
	text: string;
	product: []
}

// export async function generateStaticParams() {
// 	return dataProducts.map(item => ({
// 		categorySlug: item.category,
// 	}))
// }

const CategoryProduct = ({ params }: { params: Category }) => {

	const { categorySlug } = params

	console.log(categorySlug);


	// console.log("Params =>", params);

	const filterProducts = dataProducts.filter(dataProducts => dataProducts.category === categorySlug)




	// console.log("Filter Data Products", filterProducts);


	// const router = useRouter()

	return (
		<>
			<section className={`${styling.bg_hero} flex`}>
				<div className="container_content flex items-end justify-center">
					<div className="text-center pb-24">
						<p className='text-red text-sm mb-1 uppercase'>technical guide & reference</p>
						<h3 className='capitalize text-darkBlue font-semibold'>{categorySlug}</h3>
					</div>
				</div>
			</section>

			<section className='pt-0 pb-24'>
				<div className="container">
					{filterProducts && filterProducts.map((item: any) => (
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4" key={item.id}>
							{item.product.map((product: any) => (
								<div className="mb-4" key={product.id}>
									<Image src={product.imgUrl} alt={product.title} className="w-full" />
									<div className="mt-4">
										<h5 className="font-semibold">{product.title}</h5>
										{/* <button type="button" onClick={() => router.push(`/tech-guide/${item.category}/${product.id}`)} className="text-[13px] text-red capitalize">Read More</button> */}
										<Link href={`/tech-guide/${item.category}/${product.id}`} className="text-[13px] text-red capitalize">Read More</Link>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</section>

		</>
	)
}




export default CategoryProduct
