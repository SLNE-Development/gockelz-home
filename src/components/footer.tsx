import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaInstagram, FaTwitch, FaX, FaYoutube } from "react-icons/fa6";

export function PageFooter() {
	return (
		<footer className="w-full bg-background py-10 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start justify-center border-t border-t-gockelz">
			<Link href="/">
				<div className="flex flex-col items-center gap-2 h-full">
					<div className="size-36">
						<Image
							src={"/images/logo.png"}
							alt="GockelzTV"
							width={300}
							height={300}
						/>
					</div>
					<div className="text-white font-bold text-2xl">
						GockelzTV
					</div>
				</div>
			</Link>

			<FooterCol
				title="Legal"
				links={[
					{ title: "Impressum", href: "/impressum" },
					{ title: "Datenschutz", href: "/datenschutz" },
				]}
			/>
			<FooterCol
				title="Social Media"
				links={[
					{
						title: "Instagram",
						href: "https://instagram.com/gockelz",
						icon: FaInstagram,
					},
					{
						title: "Twitter",
						href: "https://twitter.com/gockelz",
						icon: FaX,
					},
					{
						title: "YouTube",
						href: "https://youtube.com/@gockelz",
						icon: FaYoutube,
					},
					{
						title: "Twitch",
						href: "https://twitch.tv/gockelz",
						icon: FaTwitch,
					},
				]}
			/>
		</footer>
	);
}

function FooterCol({
	title,
	links,
}: {
	title: string;
	links: {
		title: string;
		href: string;
		icon?: IconType;
	}[];
}) {
	return (
		<nav className="flex flex-col gap-4 bg-background h-full items-center lg:items-start">
			<h2 className="text-lg font-bold text-slate-400">{title}</h2>
			<ul className="flex flex-col gap-3 lg:gap-0 items-center lg:items-start">
				{links.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
							className="inline-flex text-muted-foreground hover:text-gockelz text-xl lg:text-base transition-colors items-center gap-2"
						>
							{link.icon && <link.icon />}
							{link.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
