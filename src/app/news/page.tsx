"use client"

import CardNews from '@/components/CardNews';
import Loading from '@/components/Loading';
import { useQuery } from '@tanstack/react-query'
import axios from "axios";
import Image from "next/image";


const apiUrl = "https://newsapi.org/v2/top-headlines?category=business&apiKey=45ec0ed25438497d8e24801df3f984c5"

// const fetchDataNews = async () => {
// 	try {
// 		const resNews = await axios.get(apiUrl)

// 		console.log(resNews.data.articles)
// 		return resNews.data.articles
// 	} catch (error) {
// 		throw new Error("Something went wrong");
// 	}
// }

const NewsPage = () => {

	// const { data, isLoading, isError, error } = useQuery({
	// 	queryKey: ['news'],
	// 	queryFn: () => fetchDataNews(),
	// })

	// console.log("Data", data);


	// if (isLoading || !data) return <Loading />
	// if (isError && error instanceof Error) return <h1>{error.message}</h1>

	return (
		<>
			<section className=''>
				<div className="container">
					<div className="items__row">
						{/* {data && data.map((item: any, i: number) => (
							<div className="lg:basis-1/2 basis-auto" key={i}>
								<CardNews item={item} />
							</div>
						))} */}

					</div>

				</div>
			</section>
		</>
	)
}

export default NewsPage
