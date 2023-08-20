import Image from "next/image";
import Link from "next/link";
import styling from "../guide.module.css";
import { dataProducts } from "../../../utils/constants";

const CategoryProduct = () => {

	console.log(dataProducts);


	console.log("sfsfd");


	return (
		<>

			<section className={`${styling.bg_hero} flex`}>
				<div className="container_content flex items-end justify-center">
					<div className="text-center pb-24">
						<p className='text-red text-sm mb-1 uppercase'>technical guide & reference</p>
						<h3 className='capitalize text-darkBlue font-semibold'>Nama category</h3>
					</div>
				</div>
			</section>

			<section className='pt-0 pb-24'>
				<div className="container">
					{dataProducts.map((item, i) => (
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 " key={i}>
							{item.product.map((item: any) => (
								<div className="mb-4" key={item.id}>
									<Image src={item.imgUrl} alt={item.title} className="w-full" />
									<div className="mt-4">
										<h5 className="font-semibold">{item.title}</h5>
										<Link href={`/tech-guide//${item.title}`} className="text-[13px] text-red">Read More</Link>
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
