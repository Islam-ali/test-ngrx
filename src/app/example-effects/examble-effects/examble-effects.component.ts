import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTodosAction } from 'src/app/store/actions/todo.action';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-examble-effects',
  templateUrl: './examble-effects.component.html',
  styleUrls: ['./examble-effects.component.scss']
})
export class ExambleEffectsComponent implements OnInit{
  data:any
  constructor(private store : Store<StoreInterface>){
    this.store.subscribe(data => this.data = data.todos)
  }
  dis(){
    this.store.dispatch(new LoadTodosAction())
  }
  ngOnInit(): void {
  }
}
