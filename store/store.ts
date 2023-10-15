import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type FormValues = {
	name: string;
	email: string;
	phone: string;
	insta: string;
	yt: string;
};

type Store = {
	formValues: FormValues;
	currentStep: number;
	setFormValues: (formValues: FormValues) => void;
	setCurrentStep: (step: number) => void;
};

export const useFormStore = create<Store>((set) => ({
	formValues: { name: "", email: "", phone: "", insta: "", yt: "" },
	currentStep: 0,
	setFormValues: (formValues) => set({ formValues }),
	setCurrentStep: (step) => set({ currentStep: step }),
}));
