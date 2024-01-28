import { Injectable } from '@nestjs/common';
import { Task,TaskStatus } from './task.entity';
import { v4 } from 'uuid';


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
updateAlltasks(id:string) {
    this.tasks = this.tasks.filter(task => task.id !== id)
}

deletetasks(id:string){
    this.tasks = this.tasks.filter(task => task.id !== id)
}
}
