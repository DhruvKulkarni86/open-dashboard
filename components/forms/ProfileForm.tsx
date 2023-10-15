"use client";
import { useState } from "react";
import Tab from "../ui/Tab";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { profileSchema } from "@/zodSchema/profileSchema";
import { useFormStore } from "@/store/store";

type FormData = z.infer<typeof profileSchema>;

interface fp {
	onClose: () => void;
}

export default function ProfileForm({ onClose }: fp) {
	const [activeTab, setActiveTab] = useState(1);
	const { setFormValues, currentStep, setCurrentStep } = useFormStore();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(profileSchema),
	});

	const handleNextStep = (data: FormData) => {
		setCurrentStep(currentStep + 1);
		setActiveTab(2);
	};

	const handlePreviousStep = () => {
		setActiveTab(1);
		setCurrentStep(currentStep - 1);
	};

	function onSubmit(data: FormData) {
		onClose();
		setFormValues(data);
		console.log("DATA", data);
	}

	const isLastStep = currentStep === 2;
	return (
		<>
			<div className="flex justify-between px-4 mb-4">
				<Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>
					Basic
				</Tab>
				<Tab active={activeTab === 2} onClick={() => setActiveTab(2)}>
					Contact
				</Tab>
			</div>
			<form
				action=""
				method="POST"
				onSubmit={handleSubmit(isLastStep ? onSubmit : handleNextStep)}
			>
				<div className={activeTab === 1 ? "block" : "hidden"}>
					<div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5">
						<div className="relative mb-4">
							<label
								htmlFor="name"
								className="text-black text-base mb-1 font-medium"
							>
								Enter Name*
							</label>
							<input
								{...register("name", { required: true })}
								required
								type="text"
								id="name"
								name="name"
								placeholder="Eg. John Doe"
								className="w-full bg-field rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors?.name && (
								<p className="text-red-600 text-sm">
									{errors?.name?.message}
								</p>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="text-black text-base mb-1 font-medium"
							>
								Enter Email*
							</label>
							<input
								{...register("email", { required: true })}
								required
								type="text"
								id="email"
								name="email"
								placeholder="Eg. John@xyz.com"
								className="w-full bg-field rounded-lg border border-gray-300 focus:border-link focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors?.email && (
								<p className="text-red-600 text-sm">
									{errors?.email?.message}
								</p>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="phone"
								className="text-black text-base mb-1 font-medium"
							>
								Enter Phone*
							</label>
							<input
								{...register("phone", { required: true })}
								required
								type="text"
								id="phone"
								name="phone"
								placeholder="Eg. 9123456789"
								className="w-full bg-field rounded-lg border border-gray-300 focus:border-link focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors?.phone && (
								<p className="text-red-600 text-sm">
									{errors?.phone?.message}
								</p>
							)}
						</div>
						<button
							onClick={() => {
								handleNextStep;
							}}
							className="text-white bg-blue-gr border-0 py-2 px-6 focus:outline-none font-semibold  rounded-md text-base w-30 self-end"
						>
							Next
						</button>
					</div>
				</div>
				<div className={activeTab === 2 ? "block" : "hidden"}>
					<div className=" bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-5">
						<div className="relative mb-4">
							<label
								htmlFor="insta"
								className="text-black text-base mb-1 font-medium"
							>
								Instagram Link (Optional)
							</label>
							<input
								{...register("insta")}
								type="text"
								id="insta"
								name="insta"
								placeholder="Eg. instagram.com/username"
								className="w-full bg-field rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors?.insta && (
								<p className="text-red-600 text-sm">
									{errors?.insta?.message}
								</p>
							)}
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="yt"
								className="text-black text-base mb-1 font-medium"
							>
								Youtube Link (Optional)
							</label>
							<input
								{...register("yt")}
								type="text"
								id="yt"
								name="yt"
								placeholder="Eg. youtube/username"
								className="w-full bg-field rounded-lg border border-gray-300 focus:border-link focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							{errors?.yt && (
								<p className="text-red-600 text-sm">
									{errors?.yt?.message}
								</p>
							)}
						</div>
						<div className="flex gap-4 w-full justify-end">
							<button
								onClick={handlePreviousStep}
								// onClick={() => setActiveTab(1)}
								className="border-2 rounded-md py-2 px-6 border-slate-300 focus:outline-none font-semibold text-base"
							>
								Back
							</button>
							<button
								type="submit"
								// onClick={() => setActiveTab(2)}
								className="text-white bg-blue-gr border-0 py-2 px-6 focus:outline-none font-semibold  rounded-md text-base"
							>
								Done
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
}
