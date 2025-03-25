import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-full flex flex-col items-center justify-center w-full gap-8">
			<div className="flex flex-row justify-center items-center w-[85%] md:w-2/5 lg:w-1/2 xl:w-1/3">
				<Image
					src={"images/logo.png"}
					alt="Logo"
					width={500}
					height={500}
				/>
			</div>

			<h1 className="uppercase text-5xl md:text-2xl: lg:text-6xl font-semibold text-center max-w-2/3">
				Hier entsteht etwas Neues!
			</h1>
			<p className="text-muted-foreground text-xl">
				Besuch mich doch bald nochmal
			</p>
		</div>
	);
}
