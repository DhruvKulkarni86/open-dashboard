import Socials from "@/components/Socials";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex sm:flex-row flex-col min-h-screen min-w-screen">
			<div className="sm:w-1/2 bg-blue-gr transform  sm:clip-path-polygon clip-path-polygon-res flex sm:flex-row flex-col justify-center items-center">
				<div className="w-69 h-29 self-start px-5 py-2 sm:z-10 sm:absolute sm:top-10 sm:left-10">
					<h1 className="font-bold text-xl font-main text-main-w ">
						LOGO
					</h1>
				</div>

				<h1 className=" lg:-translate-x-10 sm:-translate-x-5 font-bold sm:text-7xl text-5xl font-main py-10 text-main-w">
					Board.
				</h1>
				<div className="lg:-translate-x-10 sm:-translate-x-5 absolute bottom-5 justify-between hidden sm:block">
					<Socials />
				</div>
			</div>
			<div className="sm:w-1/2 m-10 flex items-center justify-start">
				{children}
			</div>
			<div className="clip-path-polygon-res-l py-10 justify-center bg-blue-gr flex sm:hidden">
				<Socials />
			</div>
		</div>
	);
}
