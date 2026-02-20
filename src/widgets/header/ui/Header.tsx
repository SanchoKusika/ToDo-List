import "./Header.scss";

import { BoardViewSwitcher, useBoardViewStore } from "@features/board-view-switcher";
import { LanguageSwitcher, useLanguageStore } from "@features/language-switcher";
import { SearchInput } from "@features/task-search";
import { ThemeSwitcher, useThemeStore } from "@features/theme-switcher";
import { t } from "@shared/lib/i18n";

export const Header = () => {
	const language = useLanguageStore((state) => state.language);
	const setLanguage = useLanguageStore((state) => state.setLanguage);

	const themeMode = useThemeStore((state) => state.mode);
	const setThemeMode = useThemeStore((state) => state.setMode);
	const syncWithSystemTheme = useThemeStore((state) => state.syncWithSystemTheme);
	const viewMode = useBoardViewStore((state) => state.mode);
	const setViewMode = useBoardViewStore((state) => state.setMode);

	return (
		<header className="header">
			<div className="header__controls">
				<BoardViewSwitcher
					columnsLabel={t(language, "boardViewColumns")}
					listLabel={t(language, "boardViewList")}
					value={viewMode}
					onChange={setViewMode}
				/>

				<SearchInput placeholder={t(language, "searchPlaceholder")} />

				<LanguageSwitcher value={language} onChange={setLanguage} />

				<ThemeSwitcher
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
