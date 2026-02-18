import { create } from "zustand";

import { STORAGE_KEYS } from "../../../shared/config/storageKeys";

export type ThemeMode = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

interface ThemeState {
	mode: ThemeMode;
	resolvedTheme: ResolvedTheme;
	setMode: (mode: ThemeMode) => void;
	syncWithSystemTheme: () => void;
}

const getSystemTheme = (): ResolvedTheme => {
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
};

const resolveTheme = (mode: ThemeMode): ResolvedTheme => {
	return mode === "auto" ? getSystemTheme() : mode;
};

const applyTheme = (mode: ThemeMode): ResolvedTheme => {
	const resolvedTheme = resolveTheme(mode);
	document.documentElement.dataset.theme = resolvedTheme;
	return resolvedTheme;
};

const readThemeMode = (): ThemeMode => {
	const value = localStorage.getItem(STORAGE_KEYS.themeMode);

	if (value === "light" || value === "dark" || value === "auto") {
		return value;
	}

	return "auto";
};

const initialMode = readThemeMode();
const initialResolvedTheme = applyTheme(initialMode);

export const useThemeStore = create<ThemeState>((set, get) => ({
	mode: initialMode,
	resolvedTheme: initialResolvedTheme,
	setMode: (mode) => {
		localStorage.setItem(STORAGE_KEYS.themeMode, mode);
		set({ mode, resolvedTheme: applyTheme(mode) });
	},
	syncWithSystemTheme: () => {
		if (get().mode !== "auto") {
			return;
		}

		set({ resolvedTheme: applyTheme("auto") });
	},
}));
