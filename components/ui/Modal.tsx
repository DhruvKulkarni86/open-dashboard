"use client";

import React, { useState } from "react";
import Tab from "./Tab";
import ProfileForm from "../forms/ProfileForm";

interface ModalProps {
	show: boolean;
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
	// const [activeTab, setActiveTab] = useState(1);

	if (!show) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center z-50 px-4">
			<div
				onClick={onClose}
				className="modal-overlay absolute inset-0 bg-gray-500 opacity-50"
			></div>
			<div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50 overflow-y-auto">
				<div className="modal-content p-4 ">
					<ProfileForm onClose={onClose} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
