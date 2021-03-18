import React, {useEffect} from 'react'

import {ITable} from '../../redux/types/table'
import {Button} from '../button'
import {GestureBar} from '../gesture-bar'
import {Scoreboard} from '../scoreboard'
import {Timer} from '../timer'
import {Wallet} from '../wallet'

import './index.scss'

interface ITableProps {
    table: ITable

    onJoin(tableId: number): void

    setBetting(tableId: number, isBetting: boolean): void

    setCooldown(tableId: number, isCooldown: boolean): void
}

export function Table({table, ...props}: ITableProps) {
    let bettingTimer: any = null
    let cooldownTimer: any = null

    const launchRound = async () => {
        props.setBetting(table.id, true)

        bettingTimer && clearTimeout(bettingTimer)
        bettingTimer = setTimeout(() => {
            props.setBetting(table.id, false)
            props.setCooldown(table.id, true)

            cooldownTimer && clearTimeout(cooldownTimer)
            cooldownTimer = setTimeout(() => {
                props.setCooldown(table.id, false)
            }, table.cooldownTime * 1000)
        }, table.bettingTime * 1000)
    }

    useEffect(() => {
        if (!table.isBetting || !table.isCooldown) {
            launchRound()
        }
    }, [table.isBetting, table.isCooldown])

    const onJoin = () => {
        props.onJoin(table.id)
    }

    return (
        <section className="Table-component">
            <header>
                <h1>Table #{table.id}</h1>
                <Wallet balance={table.bet} label="Bet"/>
                <Wallet balance={table.win} label="Win"/>
            </header>
            <Timer/>
            <section className="body">
                <section className="board">
                    <Scoreboard/>
                    <Button label="Join" onClick={onJoin}/>
                </section>
                <GestureBar/>
            </section>
        </section>
    )
}
