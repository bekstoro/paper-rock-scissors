import {ITableActions} from '../actions/table';
import {MAKE_BET, SET_NUMBER_OF_TABLES} from '../constants/table';
import {ITableState} from '../types/table';

const initialState: ITableState = {
    tables: [],
};

const initialTable = {
    isActive: false,
    bet: 0,
    win: 0,
    result: '',
    chips: [],
    computer_history: [],
    user_history: [],
};

export function table(state: ITableState = initialState, action: ITableActions): ITableState {
    switch (action.type) {
        case MAKE_BET:
            return {
                ...state
            };
        case SET_NUMBER_OF_TABLES:
            return {
                ...state,
                tables: new Array(action.payload).fill(initialTable),
            };
        default:
            return state;
    }
}
