import { ReactElement } from "react";

type IconType = {
	icon: () => ReactElement;
};

export default function Icon({ icon }: IconType) {
	return (
		<div className="lg:h-11 lg:w-11 h-8 w-8 flex text-4xl items-center justify-center text-main-w">
			{icon()}
		</div>
	);
}
