import Sidebar from "@/components/Sidebar";

export default function DashLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="sm:p-5 lg:p-10 p-0 h-screen w-screen flex justify-between">
			<Sidebar />
			<div className="pt-10 px-5 sm:p-0">{children}</div>
		</div>
	);
}
