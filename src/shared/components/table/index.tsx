import React from 'react';

import {ITable} from '../../redux/types/table';
import {Button} from '../button';
import {GestureBar} from '../gesture-bar';
import {Scoreboard} from '../scoreboard';
import {Timer} from '../timer';
import {Wallet} from '../wallet';

import './index.scss';

interface ITableProps {
    index: number
    table: ITable
}

export function Table(props: ITableProps) {
    const onJoin = () => {
        console.log('onJoin')
    }

    return (
        <section className="Table-component">
            <header>
                <h1>Table #{props.index + 1}</h1>
                <Wallet balance={props.table.bet} label="Bet"/>
                <Wallet balance={props.table.win} label="Win"/>
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
    );
}
