import type { Task } from "@entity/task";
import { useTasksStore } from "@feature/task-management";

export const useTasks = (task: Task) => {
	const updateTask = useTasksStore((state) => state.updateTask);
	const createTask = useTasksStore((state) => state.createTask);
	const deleteTask = useTasksStore((state) => state.deleteTask);

	const handleUpdateTask = () => {
		updateTask(task);
	};

	const handleCreateTask = () => {
		createTask(task);
	};

	const handleDeleteTask = () => {
		deleteTask(task.id);
	};

	return {
		handleUpdateTask,
		handleCreateTask,
		handleDeleteTask,
	};
};
