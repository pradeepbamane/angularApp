import { Component,input,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() userId!: string;
  @Input() name?: string;
  isAddingTask= false;
 
  constructor (private taskService:TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }
  onCompleteTask(id:string){
    
  }
  onStartAddTask(){
    this.isAddingTask=true;
  }
  onCancelAddaTsk(){
    this.isAddingTask=false;
  }
  onAddTask(taskdata:NewTaskData){
   
    this.isAddingTask=false;
  }
}
