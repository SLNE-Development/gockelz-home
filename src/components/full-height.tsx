import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export function FullHeight({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<div
			className={cn(
				"min-h-full-height-header-height w-full p-4 lg:p-8 bg-background even:bg-background-light",
				className
			)}
		>
			{children}
		</div>
	);
}
