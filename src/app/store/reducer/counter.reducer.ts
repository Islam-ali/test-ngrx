import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DECREAMENT, INCREAMENT } from "../actions/counter.action";

let initState = {
    n: 0
}
export interface Counter{
    n:number
}
export interface CustomAction{
    type?:string,
    payload?:any
}

// Reducer
export function counterReducer(state = initState, action: CustomAction) {
    switch (action.type) {
        case INCREAMENT:
            return {
                ...state,
                n: state.n + action.payload
            }
        case DECREAMENT:
            return {
                ...state,
                n: state.n - action.payload
            }
        default:
            return state
    }
}


