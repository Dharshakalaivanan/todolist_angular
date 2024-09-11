// src/app/todo.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { text: string; completed: boolean }[] = [];  
  newTask: string = ''; 

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';  
    }
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
