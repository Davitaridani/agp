import { cardIcon } from "../utils/constants";
import Link from "next/link";

interface textColor {
	color: string
}

const CategoryGuide: React.FC<textColor> = ({ color }) => {
	return (
		<>
			<div className="grid lg:grid-cols-3 grid-cols-2 gap-3 lg:w-3/5 w-auto">
				{cardIcon.map((item, i) => (
					<div className={`text-center flex-col justify-between mx-auto  border px-3 lg:py-16 py-14 w-full ${color}`} key={i}>
						<span className="flex justify-center text-[25px] lg:text-2xl mb-1">
							{item.icon}
						</span>
						<Link href={`/tech-guide/${item.category}`} className="text-[15px] uppercase">{item.text}</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default CategoryGuide
