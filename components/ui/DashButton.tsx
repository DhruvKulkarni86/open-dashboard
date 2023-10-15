import { ReactElement } from "react";

type IconType = {
	icon: () => ReactElement;
	name: string;
};

export default function DashButton({ icon, name }: IconType) {
	return (
		<div className="flex w-full justify-center sm:justify-start items-center  text-main-w hover:font-semibold my-4 sm:my-2 font-main">
			<div className="cursor-pointer   rounded-lg inline-block text-2xl">
				{icon()}
			</div>
			<p className="p-2 hidden sm:block">{name}</p>
		</div>
	);
}
