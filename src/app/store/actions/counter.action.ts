export const INCREAMENT = '[Counter] increament';
export const DECREAMENT = '[Counter] decreament'

// action
export class IncreamentAction {
    type:string = INCREAMENT;
    payload:number = 0;

    constructor(payload:number){
        this.payload = payload
    }
}

export class DecreamentAction {
    type:string = DECREAMENT;
    payload:number = 0;

    constructor(payload:number){
        this.payload = payload
    }
}