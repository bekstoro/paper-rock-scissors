export type ITable = {
    isActive: boolean,
    bet: number,
    win: number,
    result: string,
    chips: Array<any>,
    computer_history: Array<any>,
    user_history: Array<any>,
};

export type ITableState = {
    tables: Array<ITable>
};
