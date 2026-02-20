import type { Language } from "@shared/lib/i18n";

interface LanguageSwitcherProps {
	value: Language;
	onChange: (language: Language) => void;
}

export const LanguageSwitcher = ({ value, onChange }: LanguageSwitcherProps) => {
	return (
		<select
			className="header-control__select"
			value={value}
			onChange={(event) => onChange(event.target.value as Language)}
		>
			<option value="en">EN</option>
			<option value="ru">RU</option>
		</select>
	);
};
