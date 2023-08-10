import Link from "next/link";
import styles from "./Cta.module.css";


const Cta = () => {
	return (
		<section className={styles.bg_cover_cta}>
			<div className="text-center">
				<h1 className="uppercase text-white">NEED HELP FINDING the right
					<span className="block">  industrial technical </span>
					<span className="block">

						products for your business?
					</span>
				</h1>
				<Link href={"#"} className="uppercase bg-white py-2 px-3">whatshapp now</Link>
			</div>
		</section>
	)
}

export default Cta
