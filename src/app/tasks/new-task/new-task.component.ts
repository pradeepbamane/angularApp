import { Component, EventEmitter, Output, output,inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type  NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userid!:string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)
  onCancel(){
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTaskData(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userid
    );
   this.close.emit();
  }
}
