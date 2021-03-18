import {MAKE_BET, SELECT_TABLE, SET_BETTING, SET_COOLDOWN, SET_NUMBER_OF_TABLES} from '../constants/table'

// ---------------------------------------------------------------------------------------------------------------------
export interface IMakeBet {
    type: typeof MAKE_BET
    payload: number
}

export function makeBet(payload: number): IMakeBet {
    return {
        payload,
        type: MAKE_BET,
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export interface ISelectTable {
    type: typeof SELECT_TABLE
    payload: number
}

export function selectTable(payload: number): ISelectTable {
    return {
        payload,
        type: SELECT_TABLE,
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export interface ISetBetting {
    type: typeof SET_BETTING
    payload: {
        id: number,
        value: boolean
    }
}

export function setBetting(payload: {
    id: number,
    value: boolean,
}): ISetBetting {
    return {
        payload,
        type: SET_BETTING,
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export interface ISetCooldown {
    type: typeof SET_COOLDOWN
    payload: {
        id: number,
        value: boolean
    }
}

export function setCooldown(payload: {
    id: number,
    value: boolean,
}): ISetCooldown {
    return {
        payload,
        type: SET_COOLDOWN,
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export interface ISetNumberOfTables {
    type: typeof SET_NUMBER_OF_TABLES
    payload: number
}

export function setNumberOfTables(payload: number): ISetNumberOfTables {
    return {
        payload,
        type: SET_NUMBER_OF_TABLES,
    }
}

// ---------------------------------------------------------------------------------------------------------------------
export type ITableActions =
    | IMakeBet
    | ISelectTable
    | ISetCooldown
    | ISetBetting
    | ISetNumberOfTables
