import React from 'react'
import {connect} from 'react-redux'

import {IState} from '../../redux/types/game'
import {ComputerGesture} from '../../shared/components/computer-gesture'
import {GestureBar} from '../../shared/components/gesture-bar'
import {Timer} from '../../shared/components/timer'
import {ITable} from '../../shared/redux/types/table'

import './index.scss'

interface IGameZoneProps {
    table: ITable | null
}

function GameZone(props: IGameZoneProps) {
    return (
        <section className="GameZone-component">
            {props.table && (
                <>
                    <header>
                        <h1>Table #{props.table.id}</h1>
                        <Timer/>
                    </header>
                    <ComputerGesture/>
                    <GestureBar/>
                </>
            )}
        </section>
    )
}

export default connect(
    (state: IState) => ({
        table: state.shared.selectedTable,
    }),
    (dispatch: any) => ({}),
)(GameZone)
