import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect , Actions ,ofType } from "@ngrx/effects";
import { FailedAction, LOAD, SuccessAction } from "../actions/todo.action";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class TodoEffect {
    todoEffect = createEffect(()=> this.actions.pipe(
        ofType(LOAD),
        mergeMap(()=> this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
            map((data)=> new SuccessAction(data)),
            catchError((err)=> of(new FailedAction(err)))
        ))
    ))

    constructor(private http: HttpClient , private actions:Actions){

    }
}