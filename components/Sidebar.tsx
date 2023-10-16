import Link from "next/link";
import { ReactElement } from "react";

import {
	LuPieChart as pie,
	LuTags as tags,
	LuCalendarClock as cal,
	LuUserCircle as user,
	LuSettings as settings,
} from "react-icons/lu";
import DashButton from "./ui/DashButton";

interface Nav {
	link: string;
	name: string;
	icon: () => ReactElement;
}

const navData: Nav[] = [
	{
		link: "/dashboard",
		name: "Dashboard",
		icon: pie,
	},
	{
		link: "/transactions",
		name: "Transactions",
		icon: tags,
	},
	{
		link: "/dashboard",
		name: "Schedules",
		icon: cal,
	},
	{
		link: "/dashboard",
		name: "Users",
		icon: user,
	},
	{
		link: "/dashboard",
		name: "Settings",
		icon: settings,
	},
];

export default function Sidebar() {
	return (
		<div className="w-20 z-10 sm:w-60  flex flex-col justify-between">
			<div className=" flex flex-col sm:rounded-lg bg-blue-gr w-full h-full  items-center sm:px-10  sm:items-start">
				<Link href="/">
					<h1 className="font-bold sm:text-3xl text-lg font-main py-10 text-main-w">
						Board.
					</h1>
				</Link>
				<div className="flex flex-col justify-between  h-full">
					<div>
						{navData.map((item, index) => (
							<Link key={index} href={`${item.link}`}>
								<DashButton icon={item.icon} name={item.name} />
							</Link>
						))}
					</div>
					<div className="mb-10 sm:text-base text-xs flex flex-col gap-2 text-main-w font-main justify-start">
						<p>Help</p>
						<p>Contact Us</p>
					</div>
				</div>
			</div>
		</div>
	);
}
