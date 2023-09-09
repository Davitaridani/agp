import styling from "./guide.module.css";
import CategoryGuide from '@/components/CategoryGuide';


const TechGuide = () => {
	return (
		<>
			<section className={`${styling.bg_hero} flex pb-0`}>
				<div className="container flex_center justify-center">
					<div className="text-center">
						<p className='uppercase text-red'>TECHNICAL GUIDE & REFERENCE</p>
						<h1 className='font-bold text-darkBlue'>AGP Products
							<span className='text-red block'>Guide & Reference</span></h1>
					</div>
				</div>
			</section>

			<section className="lg:pb-28 pb-10 pt-0">
				<div className="container_content lg:px-0 px-[20px] flex justify-center">
					<CategoryGuide color="text-black" />
				</div>
			</section>
		</>
	)
}

export default TechGuide
