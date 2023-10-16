import { BarChart } from "@/components/BarChart";
import HeadCards from "@/components/HeadCards";
import ModalTrig from "@/components/ModalTrig";
import { PieChart } from "@/components/PieChart";
import Card from "@/components/ui/Card";

export default async function page() {
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
