import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import Lobby from './modules/lobby';
import GameZone from './modules/game-zone';
import {setInitialBalance} from './redux/actions/game';
import {IState} from './redux/types/game';
import {Header} from './shared/components/header';
import {setNumberOfTables} from './shared/redux/actions/table';
import {ITable} from './shared/redux/types/table';
import {INITIAL_BALANCE, NUMBER_OF_TABLES} from './constants';
import './App.scss';

interface IAppProps {
    balance: number

    tables: Array<ITable>

    setInitialBalance(initialBalance: number): void

    setNumberOfTables(numberOfTables: number): void
}

function App(props: IAppProps) {
    useEffect(() => {
        props.setInitialBalance(INITIAL_BALANCE);
        props.setNumberOfTables(NUMBER_OF_TABLES);
    }, []);

    return (
        <section className="App-component">
            <Header balance={props.balance}/>
            <section className="body">
                <Lobby/>
                <GameZone/>
            </section>
        </section>
    );
}

export default connect(
    (state: IState) => ({
        balance: state.game.balance,
        tables: state.shared.tables,
    }),
    (dispatch: any) => ({
        setInitialBalance: (initialBalance: number) => dispatch(setInitialBalance(initialBalance)),
        setNumberOfTables: (numberOfTables: number) => dispatch(setNumberOfTables(numberOfTables))
    })
)(App)
