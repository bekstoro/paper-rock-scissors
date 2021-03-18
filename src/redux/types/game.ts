import {ITableState} from '../../shared/redux/types/table';

export type IGameState = {
    balance: number,
}

export type IState = {
    game: IGameState,
    shared: ITableState,
}
