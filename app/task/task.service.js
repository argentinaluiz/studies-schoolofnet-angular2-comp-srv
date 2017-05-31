"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_service_1 = require("../message.service");
var core_1 = require("@angular/core");
var TASKS = [
    { id: 1, name: 'Trabalhar' },
    { id: 2, name: 'Lavar pratos' },
    { id: 3, name: 'Tirar poeira' },
    { id: 4, name: 'Compras no supermercado' },
    { id: 5, name: 'Cuidar das Crianças' },
    { id: 6, name: 'Jogar videogame' },
    { id: 7, name: 'Almoçar' },
    { id: 8, name: 'Jantar' },
    { id: 9, name: 'Fazer exercício' },
    { id: 10, name: 'Pagar contas' }
];
var TaskService = (function () {
    function TaskService(messageService) {
        this.messageService = messageService;
    }
    TaskService.prototype.getTasks = function () {
        return TASKS;
    };
    TaskService.prototype.getTask = function (id) {
        var array = this.getTasks().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    TaskService.prototype.createTask = function (task) {
        task.id = this.getTasks().length + 1;
        this.getTasks().push(task);
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa incluída com sucesso'
        });
    };
    TaskService.prototype.deleteTask = function (id) {
        var index = this.getTasks().findIndex(function (item) { return item.id == id; });
        // findIndex function return -1 if not find a match value of condition
        if (index != -1) {
            this.getTasks().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa excluída com sucesso'
        });
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map