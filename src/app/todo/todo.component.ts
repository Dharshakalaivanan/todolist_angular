// src/app/todo.component.ts
import { Component,  OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule,TodoItemComponent],  
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: { text: string; completed: boolean }[] = [];
  newTask: string = '';

  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = '';
      this.saveTasks();
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}