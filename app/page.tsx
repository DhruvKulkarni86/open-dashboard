import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Page() {
	const session = await getServerSession(authOptions);
	!session ? redirect("/signin") : redirect("/dashboard");
	return <h1 className="font-main">Loading...</h1>;
}
