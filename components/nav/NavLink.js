import { useRouter } from "next/router";
import Link from "next/link";

export default function NavLink({ href, pathName }) {
	const router = useRouter();

	return (
		<Link href={href} passHref>
			<a
				className={
					router.pathname == href
						? "rounded-md p-2 text-base font-medium text-blue-600 transition-all hover:bg-slate-200"
						: "rounded-md p-2 text-base font-normal text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-800"
				}
			>
				{pathName}
			</a>
		</Link>
	);
}
