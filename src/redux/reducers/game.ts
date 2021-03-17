import {IGameActions} from '../actions/game';
import {MAKE_BET} from '../constants/game';
import {IGameState} from '../types/game';

const initialState: IGameState = {};

export function game(state: IGameState, action: IGameActions): IGameState {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch(action.type) {
        case MAKE_BET:
            return {
                ...state
            };
        default:
            return state;
    }
}
