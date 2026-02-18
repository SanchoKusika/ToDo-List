import { create } from "zustand";

import { STORAGE_KEYS } from "../../../shared/config/storageKeys";

export type BoardViewMode = "columns" | "list";

interface BoardViewState {
	mode: BoardViewMode;
	setMode: (mode: BoardViewMode) => void;
}

const readBoardViewMode = (): BoardViewMode => {
	const value = localStorage.getItem(STORAGE_KEYS.boardViewMode);
	return value === "list" ? "list" : "columns";
};

export const useBoardViewStore = create<BoardViewState>((set) => ({
	mode: readBoardViewMode(),
	setMode: (mode) => {
		localStorage.setItem(STORAGE_KEYS.boardViewMode, mode);
		set({ mode });
	},
}));
