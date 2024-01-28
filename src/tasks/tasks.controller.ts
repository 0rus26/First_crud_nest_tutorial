import { Body, Controller,Delete,Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service'
import {UpdateTaskDto, createTaskDto} from './dto/task.dto'

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(){
        return this.taskService.getAlltasks();
        
}

    @Post()
    createTask(@Body() newTask: createTaskDto){
        return this.taskService.createAlltasks(newTask.title, newTask.description)
}

    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.taskService.deletetasks(id)}


    @Patch(':id')
    updateTask(@Param("id") id: string, @Body() updatedFields: UpdateTaskDto){
        return this.taskService.updateTasks(id, updatedFields)
    }
}
