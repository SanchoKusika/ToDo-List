import type { Language } from "./i18n";

const LOCALES: Record<Language, string> = {
	en: "en-US",
	ru: "ru-RU",
};

export const formatDateTime = (value: string, language: Language): string => {
	return new Intl.DateTimeFormat(LOCALES[language], {
		dateStyle: "medium",
		timeStyle: "short",
		hour12: false,
	}).format(new Date(value));
};
