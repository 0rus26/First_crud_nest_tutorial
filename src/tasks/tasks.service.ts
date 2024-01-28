import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import {UpdateTaskDto} from './dto/task.dto'

@Injectable()

export class TasksService {
    private tasks: Task[] =[
        {
        id:'1',
        title: '1era tarea',
        description: 'cocinar almuerzo',
        status: TaskStatus.PENDING,
    },];

getAlltasks(){
return this.tasks;
}

createAlltasks(title: string, description:string){
    const task = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;

}

getTaskById(id: string){
    return this.tasks.find(task => task.id === id)
}

updateTasks(id:string,  updatedFields: UpdateTaskDto): Task{
    const task = this.getTaskById(id);
    const newTask = Object.assign(task,updatedFields);
    this.tasks= this.tasks.map((task) => (task.id === id ? newTask : task));
    return newTask;
}

deletetasks(id:string){
    this.tasks = this.tasks.filter(task => task.id !== id)
}
}
