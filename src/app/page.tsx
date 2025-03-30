import { FullHeight } from "@/components/full-height";
import { socials } from "@/links";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

export default function Home() {
	return (
		<div className="flex flex-col">
			<FullHeight className="flex flex-col items-center gap-10 justify-center relative">
				<div className="inset-0 absolute z-0">
					<video
						src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
						className="h-full w-full object-cover"
						autoPlay
						loop
						muted
						playsInline
					/>
				</div>
				<div className="inset-0 absolute z-[1] bg-black/75" />
				<div className="z-[2] absolute w-full h-full flex flex-col justify-end items-start p-10 gap-2 lg:gap-4">
					<h1 className="text-2xl lg:text-7xl inline-flex items-center gap-4 font-light flex-wrap">
						<div className="size-16 lg:size-20">
							<Image
								src={"/images/logo.png"}
								alt="GockelzTV"
								width={100}
								height={100}
							/>
						</div>
						<div
							className="flex flex-col lg:flex-row lg:gap-4"
							style={{
								textShadow: "2px 2px 2px rgba(0,0,0,0.25)",
							}}
						>
							<span>Moin! Ich bin</span>
							<span className="font-bold text-gockelz-light uppercase">
								Gockelz
							</span>
						</div>
					</h1>
					<p className="lg:text-2xl text-gray-300 w-full lg:w-1/2 lg:font-light">
						Ich bin ein Streamer und Content Creator aus
						Deutschland. Ich mache hauptsächlich Gaming-Content,
						aber auch IRL-Streams mit meiner Frau.
					</p>
				</div>
			</FullHeight>
			<FullHeight className="flex flex-col items-center justify-center gap-4">
				<h2 className="font-semibold text-4xl uppercase text-center">
					Live
				</h2>
				<p className="text-muted-foreground text-xl text-center">
					Schau doch mal auf meinem Twitch-Kanal vorbei!
				</p>
				<div className="left-0 w-[95%] lg:w-1/2 h-0 relative pb-[60%] lg:pb-[30%]">
					<iframe
						name="twitch-embed"
						title="Twitch Player"
						src="https://player.twitch.tv/?channel=gockelztv&autoplay=false&parent=localhost&parent=gockelz.tv"
						style={{
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							position: "absolute",
							border: 0,
						}}
						allowFullScreen
						scrolling="no"
						allow="encrypted-media;"
					></iframe>
				</div>
			</FullHeight>
			<FullHeight className="flex flex-col items-center justify-center gap-4">
				<h2 className="font-semibold text-4xl uppercase text-center">
					Socials
				</h2>
				<p className="text-muted-foreground text-xl text-center">
					Schau doch mal auf meinen Social-Media-Kanälen vorbei!
				</p>

				<div className="flex flex-row flex-wrap items-center justify-between gap-2 lg:gap-4">
					{socials.map((socials, index) => (
						<SocialButton
							key={index}
							link={socials.href}
							icon={socials.icon}
						/>
					))}
				</div>
			</FullHeight>
		</div>
	);
}

function SocialButton({
	link: href,
	icon: Icon,
}: {
	link: string;
	icon: IconType;
}) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-row items-center gap-2 bg-background-light rounded-lg p-4 lg:p-5 hover:bg-background-light/50 transition-all"
		>
			<Icon className="text-2xl lg:text-4xl" />
		</Link>
	);
}
