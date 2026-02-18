import { create } from "zustand";

interface TaskSearchState {
	query: string;
	setQuery: (query: string) => void;
	clearQuery: () => void;
}

export const useTaskSearchStore = create<TaskSearchState>((set) => ({
	query: "",
	setQuery: (query) => set({ query }),
	clearQuery: () => set({ query: "" }),
}));
