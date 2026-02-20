import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Task, TaskStatus } from "@entities/task";
import { STORAGE_KEYS } from "@shared/config/storageKeys";

interface CreateTaskPayload {
	title: string;
	description: string;
}

interface UpdateTaskPayload {
	id: string;
	title?: string;
	description?: string;
	status?: TaskStatus;
}

interface TasksState {
	tasks: Task[];
	createTask: (payload: CreateTaskPayload) => void;
	updateTask: (payload: UpdateTaskPayload) => void;
	deleteTask: (id: string) => void;
}

const initialTasks: Task[] = [];

export const useTasksStore = create<TasksState>()(
	persist(
		(set) => ({
			tasks: initialTasks,
			createTask: ({ title, description }) => {
				set((state) => ({
					tasks: [
						{
							id: String(Date.now()),
							title,
							description,
							status: "todo",
							createdAt: new Date().toISOString(),
							updatedAt: null,
						},
						...state.tasks,
					],
				}));
			},
			updateTask: ({ id, title, description, status }) => {
				set((state) => ({
					tasks: state.tasks.map((task) =>
						task.id === id
							? {
									...task,
									title: title ?? task.title,
									description: description ?? task.description,
									status: status ?? task.status,
									updatedAt: new Date().toISOString(),
								}
							: task,
					),
				}));
			},
			deleteTask: (id) => {
				set((state) => ({
					tasks: state.tasks.filter((task) => task.id !== id),
				}));
			},
		}),
		{
			name: STORAGE_KEYS.tasks,
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ tasks: state.tasks }),
		},
	),
);
