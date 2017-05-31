import {Component, OnInit} from '@angular/core'; // decorator
import {Router} from '@angular/router';
import {Task} from './task';
import {TaskService} from './task.service';

declare var module: any;

@Component({
    selector: 'task-list', // custom tag that we will use in template
    templateUrl: 'task-list.component.html',
    moduleId: module.id
})


export class TaskListComponent implements OnInit{ // export permit use this class in another file
    tasks:Task[];
    selectedTask: Task;

    constructor(
            private taskService: TaskService,
            private router: Router
    ) {}

    goToEdit(id: number){
        this.router.navigate(['tasks', id, 'edit'])
    }

    // selectTask(task){
    //     // console.log(task);
    //     this.selectedTask = task;
    // }

    deleteTask(id: number) {
        this.taskService.deleteTask(id)
    }
    
    ngOnInit(): void {
        this.tasks = this.taskService.getTasks();
    }
}

