import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="sm:p-5 lg:p-10 p-0 min-h-screen w-full flex sm:gap-10">
			<Sidebar />
			<div className="flex flex-col w-full">
				<div className="flex  w-full sm:py-5 sm:px-0 py-5 mt-4 sm:mt-0 px-2">
					<Header />
				</div>
				<div className="w-full h-full">{children}</div>
			</div>
		</div>
	);
}
