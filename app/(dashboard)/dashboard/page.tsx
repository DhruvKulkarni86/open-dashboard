import { BarChart } from "@/components/BarChart";
import HeadCards from "@/components/HeadCards";
import ModalTrig from "@/components/ModalTrig";
import { PieChart } from "@/components/PieChart";
import Card from "@/components/ui/Card";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function page() {
	const session = await getServerSession(authOptions);
	if (session == null) {
		return redirect("/signin");
	} else {
		return (
			<div>
				<HeadCards />
				<div className="flex">
					<Card size="large">
						<div className="w-full sm:h-[400px] flex items-center justify-center">
							<BarChart />
						</div>
					</Card>
				</div>
				<div className="flex flex-col sm:flex-row items-center sm:gap-10">
					<Card size="medium">
						<div className="flex w-full h-full items-center justify-center">
							<PieChart />
						</div>
					</Card>
					<Card size="medium">
						<div className="flex w-full h-full">
							<ModalTrig />
						</div>
					</Card>
				</div>
			</div>
		);
	}
}
