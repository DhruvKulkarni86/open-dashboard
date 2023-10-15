import React from "react";

interface CardProps {
	size?: "small" | "medium" | "large";
	children: React.ReactNode;
}

export default function Card({ size = "small", children }: CardProps) {
	const sizeClasses = {
		small: "sm:w-[237px] w-64",
		medium: "sm:w-1/2 w-full sm:h-[256px] h-auto",
		large: "w-full",
	};
	return (
		<div
			className={`bg-white rounded-lg shadow-md p-4 ${sizeClasses[size]} my-4 `}
		>
			{children}
		</div>
	);
}
