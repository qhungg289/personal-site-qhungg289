import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ href, pathName }) {
	const router = useRouter();

	return (
		<Link href={href} passHref>
			<a
				className={
					router.pathname == href
						? "text-base font-medium text-blue-600 transition-all"
						: "text-base font-medium text-neutral-500 transition-all hover:text-neutral-800"
				}
			>
				{pathName}
			</a>
		</Link>
	);
}
