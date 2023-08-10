import { asset_home } from "../../assets/images";
import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {

	return (
		<footer className="bg-navy">
			<div className="container text-gray">
				<div className="flex-row">
					<div className="basis-1/3">
						<Image src={asset_home.logo} alt="logo footer" />
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aperiam commodi, id eos optio pariatur error.</p>
						<Link href={"/"} className="flex-center mx-1"><span><FiPhoneCall /></span>+62 8344-444-443</Link>
						<Link href={"/"} className="flex-center justify-start"><span><MdOutlineMail /></span>example@gmail.com</Link>
					</div>
				</div>
			</div>
		</footer >
	)
}

export default Footer
