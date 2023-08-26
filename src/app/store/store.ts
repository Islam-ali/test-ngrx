import { ActionReducerMap } from "@ngrx/store";
import { Counter, counterReducer } from "./reducer/counter.reducer";
import { ToDo, TodoReducer } from "./reducer/todo.reducer";

export interface StoreInterface{
    counter:Counter,
    todos?: any
}



export const redusers:ActionReducerMap<StoreInterface> = {counter:counterReducer,todos:TodoReducer};