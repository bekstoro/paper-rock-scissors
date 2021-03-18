import {IGameActions} from '../actions/game';
import {SET_INITIAL_BALANCE} from '../constants/game';
import {IGameState} from '../types/game';

const initialState: IGameState = {
    balance: 0,
};

export function game(state: IGameState = initialState, action: IGameActions): IGameState {
    switch (action.type) {
        case SET_INITIAL_BALANCE:
            return {
                ...state,
                balance: action.payload,
            };
        default:
            return state;
    }
}
