"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { FaBars } from "react-icons/fa6";

export function PageHeader() {
	return (
		<header className="fixed w-full h-header-height flex flex-row justify-between px-6 bg-background items-center shadow border-b border-b-gockelz z-50">
			<Link href="/">
				<div className="flex flex-row items-center gap-2">
					<div className="size-16">
						<Image
							src={"/images/logo.png"}
							alt="GockelzTV"
							width={100}
							height={100}
						/>
					</div>
					<div className="text-white font-semibold text-lg">
						GockelzTV
					</div>
				</div>
			</Link>

			<Navigation />
			<MobileNavigation />
		</header>
	);
}

function HeaderLink({
	href,
	children,
	button,
	onClick,
}: PropsWithChildren<{
	href: string;
	button?: boolean;
	onClick?: () => void;
}>) {
	const currentPath = usePathname();
	const active = href === currentPath;

	if (button) {
		return (
			<Link
				href={href}
				className="relative inline-block group"
				onClick={onClick}
			>
				<div className="relative p-px overflow-hidden bg-gradient-to-br from-purple-800 to-purple-500 transition-all rounded">
					<div className="relative bg-background group-hover:bg-transparent transition-all px-2 text-center lg:text-start lg:px-10 py-2 z-10 text-lg duration-150 font-light rounded">
						{children}
					</div>
				</div>
			</Link>
		);
	}

	return (
		<Link
			onClick={onClick}
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

function Navigation() {
	return (
		<nav className="hidden lg:block">
			<ul className="flex flex-row gap-10 items-center">
				<HeaderLink href="/">Home</HeaderLink>
				<HeaderLink href="/ueber-mich">Über Mich</HeaderLink>
				<HeaderLink href="mailto:management@gockelz.tv" button>
					Kontakt
				</HeaderLink>
			</ul>
		</nav>
	);
}

function MobileNavigation() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="flex lg:hidden text-2xl cursor-pointer">
				<FaBars />
			</SheetTrigger>
			<SheetContent
				className="flex lg:hidden border-r-gockelz"
				side="left"
			>
				<SheetHeader>
					<SheetTitle>
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
					</SheetTitle>
				</SheetHeader>
				<nav className="p-4 h-full">
					<ScrollArea className="h-full">
						<ul className="flex flex-col gap-4">
							<HeaderLink href="/" onClick={() => setOpen(false)}>
								Home
							</HeaderLink>
							<HeaderLink
								href="/ueber-mich"
								onClick={() => setOpen(false)}
							>
								Über Mich
							</HeaderLink>
							<HeaderLink
								href="mailto:management@gockelz.tv"
								button
								onClick={() => setOpen(false)}
							>
								Kontakt
							</HeaderLink>
						</ul>
					</ScrollArea>
				</nav>
			</SheetContent>
		</Sheet>
	);
}
