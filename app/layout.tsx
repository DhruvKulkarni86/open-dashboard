import { Lato, Montserrat } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SessionProvider from "./SessionProvider";

const mont = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mont",
});

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700"],
	display: "swap",
	variable: "--font-lato",
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);
	console.log("SESS", session);
	return (
		<html
			lang="en"
			className={`${mont.variable} ${lato.variable} font-sans`}
		>
			<SessionProvider session={session}>
				{/* {!session ? redirect("/signin") : <body>{children}</body>} */}
				<body>{children}</body>
			</SessionProvider>
		</html>
	);
}
