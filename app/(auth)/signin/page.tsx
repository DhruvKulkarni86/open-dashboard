import Signin from "@/components/forms/Signin";
import SocialButton from "@/components/ui/SocialButton";

export default function Page() {
	return (
		<div className="flex flex-col gap-5">
			<div>
				<h1 className="font-bold text-4xl font-main">Sign In</h1>
				<p className="text-sm font-comp">Sign in to your account</p>
			</div>
			<div className="flex gap-4 justify-between ">
				<SocialButton />
				<SocialButton />
			</div>
			<Signin />
		</div>
	);
}
