import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/task.dto';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): import("./task.entity").Task[];
    createTask(newTask: createTaskDto): {
        id: string;
        title: string;
        description: string;
        status: import("./task.entity").TaskStatus;
    };
    deleteTask(id: string): void;
}
