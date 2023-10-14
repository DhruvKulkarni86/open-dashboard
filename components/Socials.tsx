import Icon from "./ui/Icon";
import {
	AiFillGithub as Github,
	AiFillTwitterCircle as Twitter,
	AiFillLinkedin as Linkedin,
} from "react-icons/ai";
import { BiLogoDiscord as Discord } from "react-icons/bi";

export default function Socials() {
	return (
		<div className="flex flex-row gap-5">
			<Icon icon={Github} />
			<Icon icon={Twitter} />
			<Icon icon={Linkedin} />
			<Icon icon={Discord} />
		</div>
	);
}
