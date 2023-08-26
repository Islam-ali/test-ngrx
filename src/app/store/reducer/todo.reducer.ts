import { FAILED, SUCCESS } from "../actions/todo.action";
import { CustomAction } from "./counter.reducer";

export interface ToDo {
    userId: number,
    id: number,
    title: string,
    body: string
}

export function TodoReducer(state: ToDo[], action: CustomAction) {
    console.log(state , action);
    
    switch (action.type) {
        case SUCCESS:
            return action.payload
        case FAILED:
            return state
    }
}