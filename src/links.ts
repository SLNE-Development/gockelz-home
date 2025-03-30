import { IconType } from "react-icons";
import {
	FaDiscord,
	FaEnvelope,
	FaInstagram,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa6";

export const socials: { title: string; href: string; icon: IconType }[] = [
	{
		title: "Instagram",
		href: "https://instagram.com/gockelztv",
		icon: FaInstagram,
	},
	{
		title: "TikTok",
		href: "https://www.tiktok.com/@gockelztv",
		icon: FaTiktok,
	},
	{
		title: "Discord",
		href: "https://discord.gg/kfGGg2A5mu",
		icon: FaDiscord,
	},
	{
		title: "YouTube",
		href: "https://.youtube.com/@GockelzTV",
		icon: FaYoutube,
	},
	{
		title: "Kontakt",
		href: "mailto:management@gockelz.tv",
		icon: FaEnvelope,
	},
];
