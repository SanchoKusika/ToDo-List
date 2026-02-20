import type { Task } from "@entities/task";
import { useTasksStore } from "@features/task-management";

interface UseTasksOptions {
	onEdit?: (task: Task) => void;
	onDelete?: (id: string) => void;
}

export const useTasks = (task: Task, options: UseTasksOptions) => {
	const updateTask = useTasksStore((state) => state.updateTask);
	const createTask = useTasksStore((state) => state.createTask);
	const deleteTask = useTasksStore((state) => state.deleteTask);

	const handleUpdateTask = () => {
		if (options.onEdit) {
			options.onEdit(task);
			return;
		}

		updateTask(task);
	};

	const handleCreateTask = () => {
		createTask(task);
	};

	const handleDeleteTask = () => {
		if (options.onDelete) {
			options.onDelete(task.id);
			return;
		}

		deleteTask(task.id);
	};

	return {
		handleUpdateTask,
		handleCreateTask,
		handleDeleteTask,
	};
};
