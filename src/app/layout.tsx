import { PageFooter } from "@/components/footer";
import { PageHeader } from "@/components/header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "GockelzTV",
	description: "GockelzTV",
	icons: {
		icon: "/images/favicon/favicon.ico",
		apple: "/images/favicon/apple-touch-icon.png",
	},
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
				className={`${montserrat.className} antialiased bg-background`}
			>
				<PageHeader />

				<div className="pt-header-height">{children}</div>

				<PageFooter />
			</body>
		</html>
	);
}
