"use client";

import React, { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import {
	AiOutlinePlusCircle,
	AiOutlineWhatsApp,
	AiOutlineMail,
	AiOutlineInstagram,
	AiOutlineYoutube,
} from "react-icons/ai";
import { useFormStore } from "@/store/store";

export default function ModalTrig() {
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		useFormStore.persist.rehydrate();
	}, []);

	const { formValues, initialLoad, setInitialLoad, setCurrentStep } =
		useFormStore();

	useEffect(() => {
		setTimeout(() => {
			setInitialLoad(false);
		}, 1000);
		useFormStore.persist.rehydrate();
	}, [setInitialLoad]);
	const openModal = () => {
		setCurrentStep(1);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<>
			{initialLoad ? (
				<div className="animate-pulse rounded-lg w-full h-full bg-skeleton"></div>
			) : (
				<>
					{formValues.name === "" ? (
						<>
							<div
								onClick={openModal}
								className="flex flex-col m-auto text-stone-300 justify-center cursor-pointer"
							>
								<AiOutlinePlusCircle className="text-7xl" />
								Add Profile
							</div>
							<Modal show={showModal} onClose={closeModal} />
						</>
					) : (
						<>
							<div className="flex flex-col justify-around w-full">
								<div className="p text-2xl font-bold font-main">
									{formValues.name}
								</div>
								<div className="grid grid-cols-2 grid-rows-2 gap-4">
									<div className="flex text-xl items-center w-[148px] justify-between">
										<div className="text-lime-600 text-2xl">
											<AiOutlineWhatsApp />
										</div>
										{formValues.phone}
									</div>
									<div className="flex text-xl items-center w-[148px] justify-between">
										<div className="text-pink-500 text-2xl">
											<AiOutlineInstagram />
										</div>
										{formValues.insta}
									</div>
									<div className="flex text-xl items-center w-[148px] justify-between">
										<div className="text-indigo-500 text-2xl">
											<AiOutlineMail />
										</div>
										{formValues.email}
									</div>

									<div className="flex text-xl items-center w-[148px] justify-between">
										<div className="text-rose-700 text-2xl">
											<AiOutlineYoutube />
										</div>
										{formValues.yt}
									</div>
								</div>
							</div>
						</>
					)}
				</>
			)}
		</>
	);
}
