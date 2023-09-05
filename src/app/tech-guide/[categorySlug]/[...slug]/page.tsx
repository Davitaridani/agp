
"use client"
import Image from "next/image"
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { dataProducts } from "../../../../utils/constants";
import styling from "../../guide.module.css";

interface categoryProps {
	slug: any;
	id: number;
	categorySlug: string;
	text: string;
	product: {
		id: number;
		// imgUrl: any;
		// src: string | StaticImageData;
		title: string;
	}
}

const DetailProductPage = ({ params }: { params: categoryProps }) => {

	const { slug, categorySlug } = params


	console.log(slug);
	console.log(categorySlug);


	const result = dataProducts.find((item) => item.category === categorySlug)

	if (!result) {
		return (
			<>
				<h1>Not Found</h1>
			</>
		)
	}
	const filterProducts = result.product.find((item) => item.id == slug[0])

	return (
		<>

			<section className={`${styling.bg_hero} flex h-4 pb-0`}>
				<div className="container flex_items_center">
					<div className="item-center">
						<h3>{filterProducts?.title}</h3>
					</div>
				</div>
			</section >

			<section>
				<div className="container_content">
					<div className="items__row">
						<div className="basis">

							<Image src={filterProducts?.imgUrl} width={500}
								height={500} alt="product" />
							<h3>Slug {slug}</h3>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default DetailProductPage


