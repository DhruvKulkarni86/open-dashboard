"use client";
import { LuBell, LuUserCircle, LuSearch } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
	const pathname = usePathname();
	const session = useSession();
	return (
		<div className="flex justify-between w-full items-center">
			<h1 className="sm:text-2xl capitalize text-xl font-bold font-main">
				{pathname.substring(1)}
			</h1>
			<div className="flex  lg:w-1/4 w-1/2  justify-around items-center">
				<input
					type="text"
					id="search"
					placeholder="Search..."
					name="search"
					className="hidden sm:block w-40 bg-main-w   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
				/>
				<div className="cursor-pointer sm:hidden  rounded-lg inline-block text-2xl">
					<LuSearch />
				</div>
				<div className="cursor-pointer   rounded-lg inline-block text-2xl">
					<LuBell />
				</div>
				<div className="cursor-pointer rounded-lg inline-block text-2xl">
					<Image
						src={session.data?.user?.image!}
						alt="profile"
						width={20}
						height={20}
						className="rounded-full w-10 h-10"
					/>

					{/* <LuUserCircle /> */}
				</div>
			</div>
		</div>
	);
}
