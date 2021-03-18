import {ITableActions} from '../actions/table'
import {MAKE_BET, SELECT_TABLE, SET_BETTING, SET_COOLDOWN, SET_NUMBER_OF_TABLES} from '../constants/table'
import {ITableState} from '../types/table'

const initialState: ITableState = {
    selectedTable: null,
    tables: [],
}

const initialTable = {
    id: 0,
    isActive: false,
    bet: 0,
    win: 0,
    result: '',
    isBetting: false,
    bettingTime: 0,
    isCooldown: false,
    cooldownTime: 0,
    chips: [],
    computer_history: [],
    user_history: [],
}

export function table(state: ITableState = initialState, action: ITableActions): ITableState {
    switch (action.type) {
        case MAKE_BET:
            return {
                ...state,
            }
        case SELECT_TABLE:
            const selectedTable = state.tables.find(table => table.id === action.payload)
            return {
                ...state,
                ...(selectedTable && {selectedTable}),
            }
        case SET_BETTING:
            return {
                ...state,
                tables: state.tables.map(table => ({
                    ...table,
                    isBetting: table.id === action.payload.id ? action.payload.value : table.isBetting
                })),
            }
        case SET_COOLDOWN:
            return {
                ...state,
                tables: state.tables.map(table => ({
                    ...table,
                    isCooldown: table.id === action.payload.id ? action.payload.value : table.isCooldown
                })),
            }
        case SET_NUMBER_OF_TABLES:
            return {
                ...state,
                tables: new Array(action.payload)
                    .fill(initialTable)
                    .map((table, index) => ({
                        ...table,
                        id: index + 1,
                        bet: 5 * (index + 1),
                        bettingTime: 7 * (index + 1),
                        cooldownTime: 3 * (index + 1),
                    })),
            }
        default:
            return state
    }
}
