export type Language = "ru" | "en";

export type TranslationKey =
	| "searchPlaceholder"
	| "themeLight"
	| "themeDark"
	| "themeAuto"
	| "boardTodo"
	| "boardInProgress"
	| "boardDone"
	| "boardViewColumns"
	| "boardViewList"
	| "taskStatusLabel"
	| "createTask"
	| "createTaskTitle"
	| "editTaskTitle"
	| "saveChanges"
	| "taskTitleLabel"
	| "taskTitlePlaceholder"
	| "taskDescriptionLabel"
	| "taskDescriptionPlaceholder"
	| "cancel"
	| "createdAt"
	| "updatedAt";

const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
	en: {
		searchPlaceholder: "Search tasks...",
		themeLight: "Light",
		themeDark: "Dark",
		themeAuto: "Auto",
		boardTodo: "Todo",
		boardInProgress: "In progress",
		boardDone: "Done",
		boardViewColumns: "Columns",
		boardViewList: "List",
		taskStatusLabel: "Status",
		createTask: "Create task",
		createTaskTitle: "Create task",
		editTaskTitle: "Edit task",
		saveChanges: "Save changes",
		taskTitleLabel: "Title",
		taskTitlePlaceholder: "Enter task title",
		taskDescriptionLabel: "Description",
		taskDescriptionPlaceholder: "Enter task description",
		cancel: "Cancel",
		createdAt: "Created",
		updatedAt: "Updated",
	},
	ru: {
		searchPlaceholder: "Найти задачу...",
		themeLight: "Светлая",
		themeDark: "Темная",
		themeAuto: "Авто",
		boardTodo: "К выполнению",
		boardInProgress: "В работе",
		boardDone: "Готово",
		boardViewColumns: "Колонки",
		boardViewList: "Список",
		taskStatusLabel: "Статус",
		createTask: "Создать задачу",
		createTaskTitle: "Создание задачи",
		editTaskTitle: "Редактирование задачи",
		saveChanges: "Сохранить изменения",
		taskTitleLabel: "Название",
		taskTitlePlaceholder: "Введите название задачи",
		taskDescriptionLabel: "Описание",
		taskDescriptionPlaceholder: "Введите описание задачи",
		cancel: "Отмена",
		createdAt: "Создано",
		updatedAt: "Изменено",
	},
};

export const t = (language: Language, key: TranslationKey): string => {
	return TRANSLATIONS[language][key];
};
