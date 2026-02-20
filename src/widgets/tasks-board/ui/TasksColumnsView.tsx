import { useState } from "react";
import type { Task, TaskStatus } from "@entities/task";
import { type Language, t } from "@shared/lib";
import { TaskCard } from "./TaskCard";

interface TasksColumnsViewProps {
	language: Language;
	todoTasks: Task[];
	inProgressTasks: Task[];
	doneTasks: Task[];
	onCreateTaskClick: () => void;
	onEditTask: (task: Task) => void;
	onDeleteTask: (id: string) => void;
	onMoveTask: (id: string, status: TaskStatus) => void;
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
	onMoveTask,
	getStatusLabel,
}: TasksColumnsViewProps) => {
	const [dropStatus, setDropStatus] = useState<TaskStatus | null>(null);

	const handleDrop = (status: TaskStatus, taskId: string) => {
		if (!taskId) return;
		onMoveTask(taskId, status);
		setDropStatus(null);
	};

	return (
		<section className="tasks-board">
			<article
				className={`tasks-column ${dropStatus === "todo" ? "is-drop-target" : ""}`}
				onDragOver={(event) => {
					event.preventDefault();
					setDropStatus("todo");
				}}
				onDragLeave={() => setDropStatus(null)}
				onDrop={(event) => {
					event.preventDefault();
					handleDrop("todo", event.dataTransfer.getData("text/plain"));
				}}
			>
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
							draggable
							onEdit={onEditTask}
							onDelete={onDeleteTask}
							getStatusLabel={getStatusLabel}
						/>
					))}
				</ul>

				<button type="button" className="tasks-column__create-btn" onClick={onCreateTaskClick}>
					{t(language, "createTask")}
				</button>
			</article>

			<article
				className={`tasks-column ${dropStatus === "in-progress" ? "is-drop-target" : ""}`}
				onDragOver={(event) => {
					event.preventDefault();
					setDropStatus("in-progress");
				}}
				onDragLeave={() => setDropStatus(null)}
				onDrop={(event) => {
					event.preventDefault();
					handleDrop("in-progress", event.dataTransfer.getData("text/plain"));
				}}
			>
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
							draggable
							onEdit={onEditTask}
							onDelete={onDeleteTask}
							getStatusLabel={getStatusLabel}
						/>
					))}
				</ul>
			</article>

			<article
				className={`tasks-column ${dropStatus === "done" ? "is-drop-target" : ""}`}
				onDragOver={(event) => {
					event.preventDefault();
					setDropStatus("done");
				}}
				onDragLeave={() => setDropStatus(null)}
				onDrop={(event) => {
					event.preventDefault();
					handleDrop("done", event.dataTransfer.getData("text/plain"));
				}}
			>
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
							draggable
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
