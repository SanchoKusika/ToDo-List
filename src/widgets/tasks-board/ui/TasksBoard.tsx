import { useState } from "react";

import type { Task, TaskStatus } from "../../../entities/task";
import {
	BoardViewSwitcher,
	useBoardViewStore,
} from "../../../features/board-view-switcher";
import { CreateTaskModal } from "../../../features/task-management";
import { t, type Language } from "../../../shared/lib";

import { TasksColumnsView } from "./TasksColumnsView";
import { TasksListView } from "./TasksListView";

import "./TasksBoard.scss";

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
	const setViewMode = useBoardViewStore((state) => state.setMode);

	const todoTasks = tasks.filter((task) => task.status === "todo");
	const inProgressTasks = tasks.filter(
		(task) => task.status === "in-progress",
	);
	const doneTasks = tasks.filter((task) => task.status === "done");

	const statusLabels: Record<TaskStatus, string> = {
		todo: t(language, "boardTodo"),
		"in-progress": t(language, "boardInProgress"),
		done: t(language, "boardDone"),
	};

	return (
		<>
			<section className="tasks-board-view">
				<BoardViewSwitcher
					columnsLabel={t(language, "boardViewColumns")}
					listLabel={t(language, "boardViewList")}
					value={viewMode}
					onChange={setViewMode}
				/>

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
