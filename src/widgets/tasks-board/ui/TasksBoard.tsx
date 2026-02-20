import "./TasksBoard.scss";

import { useState } from "react";

import type { Task, TaskStatus } from "@entities/task";
import { useBoardViewStore } from "@features/board-view-switcher";
import { CreateTaskModal } from "@features/task-management";
import { type Language, t } from "@shared/lib";
import { TasksColumnsView } from "./TasksColumnsView";
import { TasksListView } from "./TasksListView";

interface TasksBoardProps {
	language: Language;
	tasks: Task[];
	onCreateTask: (payload: { title: string; description: string }) => void;
	onUpdateTask: (payload: {
		id: string;
		title: string;
		description: string;
		status: TaskStatus;
	}) => void;
	onDeleteTask: (id: string) => void;
}

export const TasksBoard = ({
	language,
	tasks,
	onCreateTask,
	onUpdateTask,
	onDeleteTask,
}: TasksBoardProps) => {
	const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
	const [selectedTask, setSelectedTask] = useState<Task | null>(null);

	const viewMode = useBoardViewStore((state) => state.mode);

	const todoTasks = tasks.filter((task) => task.status === "todo");
	const inProgressTasks = tasks.filter((task) => task.status === "in-progress");
	const doneTasks = tasks.filter((task) => task.status === "done");

	const statusLabels: Record<TaskStatus, string> = {
		todo: t(language, "boardTodo"),
		"in-progress": t(language, "boardInProgress"),
		done: t(language, "boardDone"),
	};

	const moveTaskToStatus = (id: string, status: TaskStatus) => {
		const task = tasks.find((item) => item.id === id);
		if (!task || task.status === status) return;

		onUpdateTask({
			id: task.id,
			title: task.title,
			description: task.description,
			status,
		});
	};

	return (
		<>
			<section className="tasks-board-view">
				{viewMode === "columns" ? (
					<TasksColumnsView
						language={language}
						todoTasks={todoTasks}
						inProgressTasks={inProgressTasks}
						doneTasks={doneTasks}
						onCreateTaskClick={() => {
							setSelectedTask(null);
							setIsTaskModalOpen(true);
						}}
						onEditTask={(task) => {
							setSelectedTask(task);
							setIsTaskModalOpen(true);
						}}
						onDeleteTask={onDeleteTask}
						onMoveTask={moveTaskToStatus}
						getStatusLabel={(status) => statusLabels[status]}
					/>
				) : (
					<TasksListView
						language={language}
						tasks={tasks}
						onCreateTaskClick={() => {
							setSelectedTask(null);
							setIsTaskModalOpen(true);
						}}
						onEditTask={(task) => {
							setSelectedTask(task);
							setIsTaskModalOpen(true);
						}}
						onDeleteTask={onDeleteTask}
						getStatusLabel={(status) => statusLabels[status]}
					/>
				)}
			</section>

			<CreateTaskModal
				language={language}
				isOpen={isTaskModalOpen}
				task={selectedTask}
				onClose={() => {
					setIsTaskModalOpen(false);
					setSelectedTask(null);
				}}
				onCreateTask={onCreateTask}
				onUpdateTask={onUpdateTask}
			/>
		</>
	);
};
