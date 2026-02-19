import { useEffect } from "react";

import { useTaskSearchStore } from "../model/searchStore";

interface SearchInputProps {
	placeholder: string;
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
	const query = useTaskSearchStore((state) => state.query);
	const setQuery = useTaskSearchStore((state) => state.setQuery);
	const setDebouncedQuery = useTaskSearchStore((state) => state.setDebouncedQuery);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [query, setDebouncedQuery]);

	return (
		<input
			className="header-control__input"
			type="search"
			value={query}
			placeholder={placeholder}
			onChange={(event) => setQuery(event.target.value)}
		/>
	);
};
