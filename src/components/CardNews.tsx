import React from 'react'
import Image from "next/image";

const CardNews = ({ item }: any) => {

	const { title, author, url, content, urlToImage } = item

	return (
		<>
			<div className="flex_center">
				<div className="card__custom">
					{/* <Image src={urlToImage} alt='cover blog' className='' fill /> */}
					{/* <h3>{title}</h3>
					<h3>{content}</h3> */}
				</div>
			</div>
		</>
	)
}

export default CardNews
