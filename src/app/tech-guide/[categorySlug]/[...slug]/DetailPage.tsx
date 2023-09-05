import React from 'react'
import Image from 'next/image'

const DetailProduct = ({ product }) => {
	return (
		<>
			{/* <h1>{product.name}</h1> */}
			<Image src={product.imgUrl} alt='prodcut' />
			<p>Deskripsi: {product.title}</p>
		</>
	)
}

export default DetailProduct
