export type Language = "ru" | "en";

export type TranslationKey =
	| "title"
	| "subtitle"
	| "searchLabel"
	| "searchPlaceholder"
	| "themeLabel"
	| "languageLabel"
	| "themeLight"
	| "themeDark"
	| "themeAuto"
	| "searchValueTitle"
	| "newTask"
	| "createdTasks"
	| "boardTodo"
	| "boardInProgress"
	| "boardDone"
	| "boardViewLabel"
	| "boardViewColumns"
	| "boardViewList"
	| "taskStatusLabel"
	| "createTask"
	| "createTaskTitle"
	| "editTask"
	| "editTaskTitle"
	| "deleteTask"
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
		title: "TODO App",
		subtitle: "Task management will be implemented step by step.",
		searchLabel: "Search",
		searchPlaceholder: "Search tasks...",
		themeLabel: "Theme",
		languageLabel: "Language",
		themeLight: "Light",
		themeDark: "Dark",
		themeAuto: "Auto",
		searchValueTitle: "Current search query",
		newTask: "New task",
		createdTasks: "Created tasks",
		boardTodo: "Todo",
		boardInProgress: "In progress",
		boardDone: "Done",
		boardViewLabel: "Board view",
		boardViewColumns: "Columns",
		boardViewList: "List",
		taskStatusLabel: "Status",
		createTask: "Create task",
		createTaskTitle: "Create task",
		editTask: "Edit",
		editTaskTitle: "Edit task",
		deleteTask: "Delete",
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
		title: "TODO приложение",
		subtitle: "Функционал задач будет реализован поэтапно.",
		searchLabel: "Поиск",
		searchPlaceholder: "Найти задачу...",
		themeLabel: "Тема",
		languageLabel: "Язык",
		themeLight: "Светлая",
		themeDark: "Темная",
		themeAuto: "Авто",
		searchValueTitle: "Текущий поисковый запрос",
		newTask: "Новая задача",
		createdTasks: "Созданные задачи",
		boardTodo: "К выполнению",
		boardInProgress: "В работе",
		boardDone: "Готово",
		boardViewLabel: "Вид доски",
		boardViewColumns: "Колонки",
		boardViewList: "Список",
		taskStatusLabel: "Статус",
		createTask: "Создать задачу",
		createTaskTitle: "Создание задачи",
		editTask: "Изменить",
		editTaskTitle: "Редактирование задачи",
		deleteTask: "Удалить",
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
