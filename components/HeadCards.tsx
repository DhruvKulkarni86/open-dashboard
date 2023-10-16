import Card from "./ui/Card";
import { BsCash } from "react-icons/bs";
import { AiOutlineTags, AiOutlineLike } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";

export default function HeadCards() {
	return (
		<div className="flex w-full flex-wrap flex-col items-center sm:flex-row lg:justify-between justify-around">
			<Card size="small">
				<div className="flex flex-col gap-2 items-start">
					<div className="rounded-full flex items-center justify-center w-10 h-10 text-white bg-green-600">
						<BsCash />
					</div>
					<p className="text-xs font-medium font-comp">
						Total Revenues
					</p>
					<div className="flex w-full items-center justify-between">
						<p className="text-xl font-bold font-comp">$2,19,312</p>
						<div className="w-16 h-8 rounded-full bg-lime-100 text-green-600 font-semibold text-xs flex items-center justify-center">
							+2.5%
						</div>
					</div>
				</div>
			</Card>
			<Card size="small">
				<div className="flex flex-col gap-2 items-start">
					<div className="rounded-full w-10 h-10 bg-amber-100 flex items-center justify-center text-white">
						<AiOutlineTags />
					</div>
					<p className="text-xs font-medium font-comp">
						Total Transactions
					</p>
					<div className="flex w-full items-center justify-between">
						<p className="text-xl font-bold font-comp">1520</p>
						<div className="w-16 h-8 rounded-full bg-lime-100 text-green-600 font-semibold text-xs flex items-center justify-center">
							+1.7%
						</div>
					</div>
				</div>
			</Card>
			<Card size="small">
				<div className="flex flex-col gap-2 items-start">
					<div className="rounded-full w-10 h-10 bg-rose-300 flex items-center justify-center text-white">
						<AiOutlineLike />
					</div>
					<p className="text-xs font-medium font-comp">Total Likes</p>
					<div className="flex w-full items-center justify-between">
						<p className="text-xl font-bold font-comp">9772</p>
						<div className="w-16 h-8 rounded-full bg-lime-100 text-green-600 font-semibold text-xs flex items-center justify-center">
							+1.4%
						</div>
					</div>
				</div>
			</Card>
			<Card size="small">
				<div className="flex flex-col gap-2 items-start">
					<div className="rounded-full w-10 h-10 bg-blue-300 flex items-center justify-center text-white">
						<LuUsers2 />
					</div>
					<p className="text-xs font-medium font-comp">Total Users</p>
					<div className="flex w-full items-center justify-between">
						<p className="text-xl font-bold font-comp">9882</p>
						<div className="w-16 h-8 rounded-full bg-lime-100 text-green-600 font-semibold text-xs flex items-center justify-center">
							+4.2
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}
