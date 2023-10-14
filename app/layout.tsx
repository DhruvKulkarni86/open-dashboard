import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${mont.variable} ${lato.variable} font-sans`}
		>
			<body>{children}</body>
		</html>
	);
}
