import {Task} from './task'
import {MessageService} from '../message.service'
import {Injectable} from '@angular/core'

let TASKS:Task[] = [
    {id: 1, name: 'Trabalhar'},
    {id: 2, name: 'Lavar pratos'},
    {id: 3, name: 'Tirar poeira'},
    {id: 4, name: 'Compras no supermercado'},
    {id: 5, name: 'Cuidar das Crianças'},
    {id: 6, name: 'Jogar videogame'},
    {id: 7, name: 'Almoçar'},
    {id: 8, name: 'Jantar'},
    {id: 9, name: 'Fazer exercício'},
    {id: 10, name: 'Pagar contas'}
]

@Injectable()
export class TaskService {

    constructor(private messageService: MessageService){}

    getTasks():Task[] {
        return TASKS;
    }

    getTask(id: number):Task|null {
        let array = this.getTasks().filter(item => item.id == id)
        return array.length ? array[0] : null
    }

    createTask(task: Task) {
        task.id = this.getTasks().length + 1
        this.getTasks().push(task)
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa incluída com sucesso'
        })
    }

    deleteTask(id: number) {
        let index = this.getTasks().findIndex(item => item.id == id);

        // findIndex function return -1 if not find a match value of condition
        if(index != -1) {
            this.getTasks().splice(index, 1)
        }
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa excluída com sucesso'
        })
    }
}