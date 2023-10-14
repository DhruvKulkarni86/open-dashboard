import Socials from "@/components/Socials";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex sm:flex-row flex-col h-screen w-screen">
			<div className="sm:w-1/2 bg-blue-gr transform  clip-path-polygon flex flex-col justify-center items-center">
				<div className="w-69 h-29 z-10 absolute top-10 left-10">
					<h1 className="font-bold text-2xl font-main text-main-w ">
						LOGO
					</h1>
				</div>

				<h1 className=" lg:-translate-x-10 sm:-translate-x-5 font-bold text-7xl font-main text-main-w">
					Board.
				</h1>
				<div className=" lg:-translate-x-10 sm:-translate-x-5 absolute bottom-5 justify-between">
					<Socials />
				</div>
			</div>
			<div className="sm:w-1/2 m-10 flex items-center justify-start bg-background">
				{children}
			</div>
		</div>
	);
}
