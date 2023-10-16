import React from "react";

interface CardProps {
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
}

export default function Card({ size = "small", children }: CardProps) {
	const sizeClasses = {
		small: "w-[280px] h-auto",
		medium: "sm:w-1/2 w-[280px] sm:h-[256px] h-[236px]",
		large: "w-full h-full xs:w-[280px]",
	};
	return (
		<div
			className={`bg-white  rounded-lg shadow-md p-4 ${sizeClasses[size]} m-4 `}
		>
			{children}
		</div>
	);
}
