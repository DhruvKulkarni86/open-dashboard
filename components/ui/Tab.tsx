"use client";

import React, { ReactNode } from "react";

interface TabProps {
	children: ReactNode;
	active: boolean;
	onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ children, active, onClick }) => {
	const tabClasses = `flex font-bold text-base items-center justify-center w-1/2 cursor-pointer p-2 ${
		active ? "border-b-4 border-blue-500" : "text-gray-600"
	}`;

	return (
		<div className={tabClasses} onClick={onClick}>
			{children}
		</div>
	);
};

export default Tab;
