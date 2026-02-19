import { create } from "zustand";

interface TaskSearchState {
	query: string;
	debouncedQuery: string;
	setQuery: (query: string) => void;
	setDebouncedQuery: (query: string) => void;
}

export const useTaskSearchStore = create<TaskSearchState>((set) => ({
	query: "",
	debouncedQuery: "",
	setQuery: (query) => set({ query }),
	setDebouncedQuery: (debouncedQuery) => set({ debouncedQuery }),
}));
