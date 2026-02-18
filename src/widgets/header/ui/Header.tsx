import {
	LanguageSwitcher,
	useLanguageStore,
} from "../../../features/language-switcher";
import { SearchInput } from "../../../features/task-search";
import { ThemeSwitcher, useThemeStore } from "../../../features/theme-switcher";
import { t } from "../../../shared/lib/i18n";

import "./Header.scss";

export const Header = () => {
	const language = useLanguageStore((state) => state.language);
	const setLanguage = useLanguageStore((state) => state.setLanguage);

	const themeMode = useThemeStore((state) => state.mode);
	const setThemeMode = useThemeStore((state) => state.setMode);
	const syncWithSystemTheme = useThemeStore(
		(state) => state.syncWithSystemTheme,
	);

	return (
		<header className="header">
			<div className="header__controls">
				<SearchInput
					label={t(language, "searchLabel")}
					placeholder={t(language, "searchPlaceholder")}
				/>

				<LanguageSwitcher
					label={t(language, "languageLabel")}
					value={language}
					onChange={setLanguage}
				/>

				<ThemeSwitcher
					label={t(language, "themeLabel")}
					lightLabel={t(language, "themeLight")}
					darkLabel={t(language, "themeDark")}
					autoLabel={t(language, "themeAuto")}
					value={themeMode}
					onChange={setThemeMode}
					syncWithSystemTheme={syncWithSystemTheme}
				/>
			</div>
		</header>
	);
};
