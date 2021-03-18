export type ITable = {
    id: number
    isActive: boolean
    bet: number
    win: number
    isBetting: boolean
    bettingTime: number
    isCooldown: boolean
    cooldownTime: number
    result: string
    chips: Array<any>
    computer_history: Array<any>
    user_history: Array<any>
}

export type ITableState = {
    selectedTable: ITable | null
    tables: Array<ITable>
}
