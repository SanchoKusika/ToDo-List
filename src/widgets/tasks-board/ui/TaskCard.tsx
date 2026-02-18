import {
	DeleteTaskButton,
	EditTaskButton,
	type Task,
	type TaskStatus,
} from "../../../entities/task";
import { formatDateTime, t, type Language } from "../../../shared/lib";

interface TaskCardProps {
	language: Language;
	task: Task;
	showStatus?: boolean;
	getStatusLabel: (status: TaskStatus) => string;
	onEdit: (task: Task) => void;
	onDelete: (id: string) => void;
}

export const TaskCard = ({
	language,
	task,
	showStatus = false,
	getStatusLabel,
	onEdit,
	onDelete,
}: TaskCardProps) => {
	return (
		<li className="task-card">
			<div className="task-card__top">
				<h3 className="task-card__title">{task.title}</h3>
				<div className="task-card__actions">
					<EditTaskButton onClick={() => onEdit(task)} />
					<DeleteTaskButton onClick={() => onDelete(task.id)} />
				</div>
			</div>

			{showStatus && (
				<div className="task-card__status-row">
					<span className="task-card__status-label">
						{t(language, "taskStatusLabel")}:
					</span>
					<span
						className={`task-card__status-badge task-card__status-badge--${task.status}`}
					>
						{getStatusLabel(task.status)}
					</span>
				</div>
			)}

			{task.description && (
				<p className="task-card__description">{task.description}</p>
			)}
			<p className="task-card__meta">
				{t(language, "createdAt")}: {formatDateTime(task.createdAt, language)}
			</p>
			{task.updatedAt && (
				<p className="task-card__meta">
					{t(language, "updatedAt")}: {formatDateTime(task.updatedAt, language)}
				</p>
			)}
		</li>
	);
};
