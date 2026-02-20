import { type Task, type TaskStatus, useTasks } from "@entities/task";
import DeleteIcon from "@shared/assets/icons/delete.svg?react";
import EditIcon from "@shared/assets/icons/edit.svg?react";
import { formatDateTime, type Language, t } from "@shared/lib";
import { IconButton } from "@shared/ui/buttons";

interface TaskCardProps {
	language: Language;
	task: Task;
	showStatus?: boolean;
	draggable?: boolean;
	onDragStart?: (taskId: string) => void;
	getStatusLabel: (status: TaskStatus) => string;
	onEdit: (task: Task) => void;
	onDelete: (id: string) => void;
}

export const TaskCard = ({ language, task, showStatus = false, draggable = false, onDragStart, getStatusLabel, onEdit, onDelete }: TaskCardProps) => {
	const { handleDeleteTask, handleUpdateTask } = useTasks(task, { onEdit, onDelete });

	return (
		<li
			className="task-card"
			draggable={draggable}
			onDragStart={(event) => {
				if (!draggable) return;
				event.dataTransfer.setData("text/plain", task.id);
				event.dataTransfer.effectAllowed = "move";
				onDragStart?.(task.id);
			}}
		>
			<div className="task-card__top">
				<h3 className="task-card__title">{task.title}</h3>
				<div className="task-card__actions">
					<IconButton className="task-card__edit-btn" onClick={handleUpdateTask} icon={<EditIcon />} />
					<IconButton className="task-card__delete-btn" onClick={handleDeleteTask} icon={<DeleteIcon />} />
				</div>
			</div>

			{showStatus && (
				<div className="task-card__status-row">
					<span className="task-card__status-label">{t(language, "taskStatusLabel")}:</span>
					<span className={`task-card__status-badge task-card__status-badge--${task.status}`}>
						{getStatusLabel(task.status)}
					</span>
				</div>
			)}

			{task.description && <p className="task-card__description">{task.description}</p>}

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
