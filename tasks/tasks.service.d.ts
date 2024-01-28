import { Task, TaskStatus } from './task.entity';
export declare class TasksService {
    private tasks;
    getAlltasks(): Task[];
    createAlltasks(title: string, description: string): {
        id: string;
        title: string;
        description: string;
        status: TaskStatus;
    };
    updateAlltasks(id: string): void;
    deletetasks(id: string): void;
}
