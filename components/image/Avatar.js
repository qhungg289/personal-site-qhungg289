import Image from "next/image";
import avatar from "../../public/img/avatar.jpg";

export default function Avatar() {
	return (
		<div className="absolute inset-y-0 right-0 -z-10 w-44 md:w-72 lg:w-80">
			<Image src={avatar} alt="Avatar" className="rounded-bl-full" />
		</div>
	);
}
