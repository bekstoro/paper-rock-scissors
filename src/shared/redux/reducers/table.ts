import {ITableActions} from '../actions/table';
import {MAKE_BET} from '../constants/table';
import {ITableState} from '../types/table';

const initialState: ITableState = {};

export function table(state: ITableState, action: ITableActions): ITableState {
    if (typeof state === 'undefined') {
        return initialState
    }
    switch (action.type) {
        case MAKE_BET:
            return {
                ...state
            };
        default:
            return state;
    }
}
