import React from 'react'
import {connect} from 'react-redux'

import {IState} from '../../redux/types/game'
import {Footer} from '../../shared/components/footer'
import {Table} from '../../shared/components/table'
import {selectTable, setBetting, setCooldown} from '../../shared/redux/actions/table'
import {ITable} from '../../shared/redux/types/table'

import './index.scss'

interface ILobbyProps {
    tables: Array<ITable>

    selectTable(tableId: number): void

    setBetting(tableId: number, isBetting: boolean): void

    setCooldown(tableId: number, isCooldown: boolean): void
}

function Lobby(props: ILobbyProps) {
    return (
        <section className="Lobby-component">
            {props.tables && props.tables?.map(table => (
                <Table
                    key={table.id}
                    table={table}
                    onJoin={props.selectTable}
                    setBetting={props.setBetting}
                    setCooldown={props.setCooldown}
                />
            ))}
            <Footer/>
        </section>
    )
}

export default connect(
    (state: IState) => ({
        tables: state.shared.tables,
    }),
    (dispatch: any) => ({
        selectTable: (tableId: number) => dispatch(selectTable(tableId)),
        setBetting: (tableId: number, isBetting: boolean) => dispatch(setBetting({id: tableId, value: isBetting})),
        setCooldown: (tableId: number, isCooldown: boolean) => dispatch(setCooldown({id: tableId, value: isCooldown})),
    })
)(Lobby)
