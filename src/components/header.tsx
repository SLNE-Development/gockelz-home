import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function PageHeader() {
	return (
		<header className="fixed w-full h-28 flex flex-row justify-between px-6 bg-background items-center">
			<Link href="/">
				<div className="flex flex-row items-center gap-2">
					<div className="size-16">
						<Image
							src={"/images/logo.png"}
							alt="GockelzTV"
							width={300}
							height={300}
						/>
					</div>
					<div className="text-white font-semibold text-lg">
						GockelzTV
					</div>
				</div>
			</Link>

			<nav>
				<ul className="flex flex-row gap-10 items-center">
					<HeaderLink href="/">Home</HeaderLink>
					<HeaderLink href="/ueber-mich" active>
						Über Mich
					</HeaderLink>
					<HeaderLink href="mailto:management@gockelz.tv" button>
						Kontakt
					</HeaderLink>
				</ul>
			</nav>
		</header>
	);
}

function HeaderLink({
	href,
	children,
	button,
	active,
}: PropsWithChildren<{ href: string; button?: boolean; active?: boolean }>) {
	if (button) {
		return (
			<Link href={href} className="relative inline-block group">
				<div className="relative p-px overflow-hidden bg-gradient-to-br from-purple-800 to-purple-500 transition-all">
					<div className="relative bg-background group-hover:bg-transparent transition-all px-10 py-2 z-10 text-lg duration-150 font-light">
						{children}
					</div>
				</div>
			</Link>
		);
	}

	return (
		<Link
			href={href}
			className={cn(
				"text-white text-lg after:block after:bg-transparent after:w-1/5 after:h-1 after:transition-all font-light",
				"hover:after:w-full hover:after:bg-gockelz duration-150",
				active ? "after:bg-gockelz" : ""
			)}
		>
			{children}
		</Link>
	);
}
