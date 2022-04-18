import Image from "next/image";
import avatar from "../../public/img/avatar.jpg";

export default function Avatar() {
	return (
		<div className="mb-8 h-24 w-24 md:h-36 md:w-36">
			<Image src={avatar} alt="Avatar" className="rounded-full" />
		</div>
	);
}
