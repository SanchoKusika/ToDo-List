import { create } from "zustand";

import type { Language } from "../../../shared/lib/i18n";
import { STORAGE_KEYS } from "../../../shared/config/storageKeys";

interface LanguageState {
	language: Language;
	setLanguage: (language: Language) => void;
}

const readLanguage = (): Language => {
	const value = localStorage.getItem(STORAGE_KEYS.language);
	return value === "ru" ? "ru" : "en";
};

export const useLanguageStore = create<LanguageState>((set) => ({
	language: readLanguage(),
	setLanguage: (language) => {
		localStorage.setItem(STORAGE_KEYS.language, language);
		set({ language });
	},
}));
