import { PageHeader } from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "GockelzTV",
	description: "GockelzTV",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} antialiased bg-background min-h-screen`}
			>
				<PageHeader />

				<div className="pt-28">
					<main className="px-6 pb-6">{children}</main>
				</div>
			</body>
		</html>
	);
}
