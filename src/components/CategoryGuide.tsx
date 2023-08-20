import { productAgp } from "../utils/constants";
import Link from "next/link";

interface textColor {
	color: string
}

const CategoryGuide: React.FC<textColor> = ({ color }) => {
	return (
		<>
			<div className="grid grid-cols-3 gap-3 lg:w-3/5 w-auto">
				{productAgp.map((item) => (
					<div className={`text-center flex-col justify-between mx-auto  border px-3 py-16 w-full ${color}`} key={item.id}>
						<span className="flex justify-center text-[20px] lg:text-2xl ">
							{item.icon}
						</span>
						<Link href={`/tech-guide/${item.category}`} className="text-[15px]">{item.text}</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default CategoryGuide
