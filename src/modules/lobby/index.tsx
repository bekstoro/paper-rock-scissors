import React from 'react';
import {connect} from 'react-redux';

import {IState} from '../../redux/types/game';
import {Footer} from '../../shared/components/footer';
import {Table} from '../../shared/components/table';
import {ITable} from '../../shared/redux/types/table';

import './index.scss';

interface ILobbyProps {
    tables: Array<ITable>
}

function Lobby(props: ILobbyProps) {
    return (
        <section className="Lobby-component">
            {props.tables && props.tables?.map((table, index) => (
                <Table key={index} index={index} table={table}/>
            ))}
            <Footer/>
        </section>
    );
}

export default connect(
    (state: IState) => ({
        tables: state.shared.tables,
    }),
    (dispatch: any) => ({})
)(Lobby)
