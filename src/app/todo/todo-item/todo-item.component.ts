import { CommonModule } from '@angular/common';
import{Component,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'app-todo-item',
    standalone:true,
    imports:[FormsModule,CommonModule],
    templateUrl:'./todo-item.component.html',
    styleUrls:['./todo-item.component.css']
})
export class TodoItemComponent{
    @Input()
    task:{text:string;completed:boolean}={text:'',completed:false};
    @Output()
    delete=new EventEmitter<void>();
    @Output()
    toggle=new EventEmitter<void>();

    onDelete()
    {
        this.delete.emit();
    }
    onToggle()
    {
        this.toggle.emit();
    }
}