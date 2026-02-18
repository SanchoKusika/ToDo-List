import { useTaskSearchStore } from "../model/searchStore";

interface SearchInputProps {
	label: string;
	placeholder: string;
}

export const SearchInput = ({ label, placeholder }: SearchInputProps) => {
	const query = useTaskSearchStore((state) => state.query);
	const setQuery = useTaskSearchStore((state) => state.setQuery);

	return (
		<label className="header-control">
			<span className="header-control__label">{label}</span>
			<input
				className="header-control__input"
				type="search"
				value={query}
				placeholder={placeholder}
				onChange={(event) => setQuery(event.target.value)}
			/>
		</label>
	);
};
