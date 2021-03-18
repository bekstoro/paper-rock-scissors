import {SET_INITIAL_BALANCE} from '../constants/game';

export type ISetInitialBalance = {
    type: string
    payload: number
}

export function setInitialBalance(payload: number): ISetInitialBalance {
    return {
        payload,
        type: SET_INITIAL_BALANCE
    };
}

export type IGameActions = ISetInitialBalance;
