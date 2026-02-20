import type { Task, TaskStatus } from "@entities/task";
import { type Language, t } from "@shared/lib";
import { TaskCard } from "./TaskCard";

interface TasksListViewProps {
	language: Language;
	tasks: Task[];
	onCreateTaskClick: () => void;
	onEditTask: (task: Task) => void;
	onDeleteTask: (id: string) => void;
	getStatusLabel: (status: TaskStatus) => string;
}

export const TasksListView = ({
	language,
	tasks,
	onCreateTaskClick,
	onEditTask,
	onDeleteTask,
	getStatusLabel,
}: TasksListViewProps) => {
	return (
		<section className="tasks-list">
			<header className="tasks-list__header">
				<button type="button" className="tasks-column__create-btn" onClick={onCreateTaskClick}>
					{t(language, "createTask")}
				</button>
			</header>

			<ul className="tasks-list__items">
				{tasks.map((task) => (
					<TaskCard
						key={task.id}
						language={language}
						task={task}
						showStatus
						onEdit={onEditTask}
						onDelete={onDeleteTask}
						getStatusLabel={getStatusLabel}
					/>
				))}
			</ul>
		</section>
	);
};
