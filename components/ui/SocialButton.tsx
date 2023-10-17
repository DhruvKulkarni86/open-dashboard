"use client";
import Google from "../Google";
import { signIn } from "next-auth/react";

export default function SocialButton() {
	return (
		<button
			onClick={() =>
				signIn("google", {
					callbackUrl: `${window.location.origin}/dashboard`,
				})
			}
			className="text-button-txt lg:text-base sm:text-xs bg-white border-0 py-2 px-3 sm:px-3 text-xs focus:outline-none hover:border rounded flex gap-2 items-center lg:max-w-200"
		>
			<Google />
			Sign in with Google
		</button>
	);
}
