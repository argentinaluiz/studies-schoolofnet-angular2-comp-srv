import {Component} from '@angular/core';
import {Router} from '@angular/router'
import {Task} from './task';
import {TaskService} from './task.service';

declare var module: any;

@Component({
    selector: 'task-new',
    templateUrl: 'task-new.component.html',
    moduleId: module.id
})

export class TaskNewComponent { // export permit use this class in another file
    task:Task = {
        id: 0,
        name: ''
    }

    constructor(
        private taskService: TaskService, 
        private router: Router
    ){}

    submit() {
        this.taskService.createTask(this.task)
        this.router.navigate(['tasks', 'list'])
    }
}