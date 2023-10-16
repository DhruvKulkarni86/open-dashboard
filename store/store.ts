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
	// loading: boolean;
	initialLoad: boolean;
	// setLoading: (loading: boolean) => void;
	setInitialLoad: (initialLoad: boolean) => void;
};

// export const useFormStore = create<Store>((set) => ({
// 	formValues: { name: "", email: "", phone: "", insta: "", yt: "" },
// 	currentStep: 0,
// 	setFormValues: (formValues) => set({ formValues }),
// 	setCurrentStep: (step) => set({ currentStep: step }),
// }));

export const useFormStore = create<Store>()(
	persist(
		(set) => ({
			formValues: {
				name: "",
				email: "",
				phone: "",
				insta: "",
				yt: "",
			},
			currentStep: 1,
			setFormValues: (formValues) => set({ formValues }),
			setCurrentStep: (step) => set({ currentStep: step }),
			loading: true,
			initialLoad: true,
			// setLoading: (loading) => set({ loading }),
			setInitialLoad: (initialLoad) => set({ initialLoad }),
		}),
		{
			name: "prof-storage",
			storage: createJSONStorage(() => sessionStorage),
			skipHydration: true,
		}
	)
);
