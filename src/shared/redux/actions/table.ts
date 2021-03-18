import {MAKE_BET, SET_NUMBER_OF_TABLES} from '../constants/table';

export type IMakeBet = {
    type: string
    payload: number
}

export function makeBet(payload: number): IMakeBet {
    return {
        payload,
        type: MAKE_BET,
    };
}

export type ISetNumberOfTables = {
    type: string
    payload: number
}

export function setNumberOfTables(payload: number): ISetNumberOfTables {
    return {
        payload,
        type: SET_NUMBER_OF_TABLES,
    };
}

export type ITableActions = IMakeBet | ISetNumberOfTables
