import {MAKE_BET} from '../constants/game';

export type IMakeBet = {
    type: string
    payload: number
}

export function makeBet(payload: number): IMakeBet {
    return {
        payload,
        type: MAKE_BET
    }
}

export type IGameActions = IMakeBet
