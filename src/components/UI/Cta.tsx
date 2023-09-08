import Link from "next/link";
import styles from "./Cta.module.css";

const Cta = () => {
	return (
		<section className={`${styles.bg_cover_cta}`}>
			<div className="text-center">
				<h1 className="uppercase text-white lg:text-3xl text-xl lg:mb-8 mb-6">NEED HELP FINDING the right
					<span className="block">industrial technical products</span>
					<span className="block">
						for your business?
					</span>
				</h1>
				<Link href={"#"} className="uppercase bg-white py-2 px-4 shadow-inner text-zinc-900 font-semibold text-sm">whatshapp now</Link>
			</div>
		</section>
	)
}

export default Cta
