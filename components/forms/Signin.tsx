export default function Signin() {
	return (
		<div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5">
			<div className="relative mb-4">
				<label
					htmlFor="email"
					className="text-black text-base mb-1 font-medium"
				>
					Email Address
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="w-full bg-field rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<div className="relative mb-4">
				<label
					htmlFor="password"
					className="text-black text-base mb-1 font-medium"
				>
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					className="w-full bg-field rounded-lg border border-gray-300 focus:border-link focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
				/>
			</div>
			<p className="text-base text-link mb-4">Forgot password?</p>
			<button className="text-white bg-blue-gr border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg">
				Sign In
			</button>
			<p className="text-xs text-gray-500 mt-3">Dont have an account?</p>
		</div>
	);
}
