import { useLanguageStore } from "../../../features/language-switcher";
import { useTaskSearchStore } from "../../../features/task-search";
import { useTasksStore } from "../../../features/task-management";
import { Header } from "../../../widgets/header";
import { TasksBoard } from "../../../widgets/tasks-board";

import "./HomePage.scss";

export const HomePage = () => {
	const language = useLanguageStore((state) => state.language);
	const debouncedQuery = useTaskSearchStore((state) => state.debouncedQuery);
	const tasks = useTasksStore((state) => state.tasks);
	const createTask = useTasksStore((state) => state.createTask);
	const updateTask = useTasksStore((state) => state.updateTask);
	const deleteTask = useTasksStore((state) => state.deleteTask);

	const normalizedQuery = debouncedQuery.trim().toLowerCase();
	const filteredTasks = tasks.filter((task) =>
		task.title.toLowerCase().includes(normalizedQuery),
	);

	return (
		<main className="home-page">
			<div className="home-page__container">
				<Header />

				<section className="home-page__main-content">
					<TasksBoard
						language={language}
						tasks={filteredTasks}
						onCreateTask={createTask}
						onUpdateTask={updateTask}
						onDeleteTask={deleteTask}
					/>
				</section>
			</div>
		</main>
	);
};
