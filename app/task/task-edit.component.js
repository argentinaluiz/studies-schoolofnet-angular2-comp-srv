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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var task_service_1 = require("./task.service");
var message_service_1 = require("./../message.service");
var TaskEditComponent = (function () {
    function TaskEditComponent(taskService, route, router, messageService) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.messageService = messageService;
    }
    TaskEditComponent.prototype.submit = function () {
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa alterada com sucesso'
        });
        this.router.navigate(['tasks', 'list']);
    };
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id']; // + signal for work with integer numbers
            _this.task = _this.taskService.getTask(id);
            if (!_this.task) {
                alert('Tarefa não existe');
            }
        });
    };
    return TaskEditComponent;
}());
TaskEditComponent = __decorate([
    core_1.Component({
        selector: 'task-edit',
        templateUrl: 'task-edit.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.ActivatedRoute,
        router_1.Router,
        message_service_1.MessageService])
], TaskEditComponent);
exports.TaskEditComponent = TaskEditComponent;
//# sourceMappingURL=task-edit.component.js.map