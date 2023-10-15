import ModalTrig from "@/components/ModalTrig";
import Card from "@/components/ui/Card";

export default function page() {
	return (
		<div>
			<div className="flex w-full flex-wrap justify-between">
				<Card size="small">enter</Card>
				<Card size="small">enter</Card>
				<Card size="small">enter</Card>
				<Card size="small">enter</Card>
			</div>
			<Card size="large">enter</Card>
			<div className="flex gap-10">
				<Card size="medium">
					<div className="flex w-full h-full items-center justify-center">
						enter
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
