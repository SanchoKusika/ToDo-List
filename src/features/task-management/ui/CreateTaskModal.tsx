import { useEffect, useState } from "react";
import type { SubmitEvent } from "react";

import type { Task, TaskStatus } from "../../../entities/task";
import { t, type Language } from "../../../shared/lib/i18n";

import "./CreateTaskModal.scss";

interface CreateTaskModalProps {
	language: Language;
	isOpen: boolean;
	task: Task | null;
	onClose: () => void;
	onCreateTask: (payload: { title: string; description: string }) => void;
	onUpdateTask: (payload: {
		id: string;
		title: string;
		description: string;
		status: TaskStatus;
	}) => void;
}

export const CreateTaskModal = ({
	language,
	isOpen,
	task,
	onClose,
	onCreateTask,
	onUpdateTask,
}: CreateTaskModalProps) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState<TaskStatus>("todo");

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		setTitle(task?.title ?? "");
		setDescription(task?.description ?? "");
		setStatus(task?.status ?? "todo");

		const onEsc = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", onEsc);
		return () => window.removeEventListener("keydown", onEsc);
	}, [isOpen, task, onClose]);

	if (!isOpen) {
		return null;
	}

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault();

		const cleanTitle = title.trim();
		const cleanDescription = description.trim();

		if (!cleanTitle) {
			return;
		}

		if (task) {
			onUpdateTask({
				id: task.id,
				title: cleanTitle,
				description: cleanDescription,
				status,
			});
		} else {
			onCreateTask({ title: cleanTitle, description: cleanDescription });
		}

		onClose();
	};

	return (
		<div className="create-task-modal">
			<div className="create-task-modal__backdrop" onClick={onClose} />

			<form
				className="create-task-modal__content"
				onSubmit={handleSubmit}
			>
				<h3>
					{task
						? t(language, "editTaskTitle")
						: t(language, "createTaskTitle")}
				</h3>

				<label>
					<span>{t(language, "taskTitleLabel")}</span>
					<input
						value={title}
						onChange={(event) => setTitle(event.target.value)}
						placeholder={t(language, "taskTitlePlaceholder")}
						autoFocus
					/>
				</label>

				<label>
					<span>{t(language, "taskDescriptionLabel")}</span>
					<textarea
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						placeholder={t(language, "taskDescriptionPlaceholder")}
						rows={4}
					/>
				</label>

				{task && (
					<label>
						<span>{t(language, "taskStatusLabel")}</span>
						<select
							value={status}
							onChange={(event) =>
								setStatus(event.target.value as TaskStatus)
							}
						>
							<option value="todo">
								{t(language, "boardTodo")}
							</option>
							<option value="in-progress">
								{t(language, "boardInProgress")}
							</option>
							<option value="done">
								{t(language, "boardDone")}
							</option>
						</select>
					</label>
				)}

				<div className="create-task-modal__actions">
					<button type="button" onClick={onClose}>
						{t(language, "cancel")}
					</button>
					<button type="submit">
						{task
							? t(language, "saveChanges")
							: t(language, "createTask")}
					</button>
				</div>
			</form>
		</div>
	);
};
