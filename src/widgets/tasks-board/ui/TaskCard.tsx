import { type Task, type TaskStatus } from "@entities/task";
import { useTasks } from "@entity/task";
import DeleteIcon from "@shared/assets/icons/delete.svg?react";
import EditIcon from "@shared/assets/icons/edit.svg?react";
import { formatDateTime, type Language, t } from "@shared/lib";
import { IconButton } from "@shared/ui/buttons";

interface TaskCardProps {
	language: Language;
	task: Task;
	showStatus?: boolean;
	getStatusLabel: (status: TaskStatus) => string;
	onEdit: (task: Task) => void;
	onDelete: (id: string) => void;
}

export const TaskCard = ({ language, task, showStatus = false, getStatusLabel }: TaskCardProps) => {
	const { handleDeleteTask, handleUpdateTask } = useTasks(task);

	return (
		<li className="task-card">
			<div className="task-card__top">
				<h3 className="task-card__title">{task.title}</h3>
				<div className="task-card__actions">
					<IconButton onClick={handleUpdateTask} icon={<EditIcon />} />
					<IconButton onClick={handleDeleteTask} icon={<DeleteIcon />} />
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
