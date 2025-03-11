import { Component, EventEmitter, Output, output,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type  NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,TaskService],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TaskService)
  onCancel(){
    this.cancel.emit();
  }
  onSubmit(){
   
  }
}
