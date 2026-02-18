import type { Task, TaskStatus } from "../../../entities/task";
import { t, type Language } from "../../../shared/lib";

import { TaskCard } from "./TaskCard";

interface TasksColumnsViewProps {
	language: Language;
	todoTasks: Task[];
	inProgressTasks: Task[];
	doneTasks: Task[];
	onCreateTaskClick: () => void;
	onEditTask: (task: Task) => void;
	onDeleteTask: (id: string) => void;
	getStatusLabel: (status: TaskStatus) => string;
}

export const TasksColumnsView = ({
	language,
	todoTasks,
	inProgressTasks,
	doneTasks,
	onCreateTaskClick,
	onEditTask,
	onDeleteTask,
	getStatusLabel,
}: TasksColumnsViewProps) => {
	return (
		<section className="tasks-board">
			<article className="tasks-column">
				<header className="tasks-column__header">
					<h2>{t(language, "boardTodo")}</h2>
					<span>{todoTasks.length}</span>
				</header>

				<ul className="tasks-column__list">
					{todoTasks.map((task) => (
						<TaskCard
							key={task.id}
							language={language}
							task={task}
							onEdit={onEditTask}
							onDelete={onDeleteTask}
							getStatusLabel={getStatusLabel}
						/>
					))}
				</ul>

				<button
					type="button"
					className="tasks-column__create-btn"
					onClick={onCreateTaskClick}
				>
					{t(language, "createTask")}
				</button>
			</article>

			<article className="tasks-column">
				<header className="tasks-column__header">
					<h2>{t(language, "boardInProgress")}</h2>
					<span>{inProgressTasks.length}</span>
				</header>

				<ul className="tasks-column__list">
					{inProgressTasks.map((task) => (
						<TaskCard
							key={task.id}
							language={language}
							task={task}
							onEdit={onEditTask}
							onDelete={onDeleteTask}
							getStatusLabel={getStatusLabel}
						/>
					))}
				</ul>
			</article>

			<article className="tasks-column">
				<header className="tasks-column__header">
					<h2>{t(language, "boardDone")}</h2>
					<span>{doneTasks.length}</span>
				</header>

				<ul className="tasks-column__list">
					{doneTasks.map((task) => (
						<TaskCard
							key={task.id}
							language={language}
							task={task}
							onEdit={onEditTask}
							onDelete={onDeleteTask}
							getStatusLabel={getStatusLabel}
						/>
					))}
				</ul>
			</article>
		</section>
	);
};
