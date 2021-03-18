import React from 'react';

import {ComputerGesture} from '../../shared/components/computer-gesture';
import {GestureBar} from '../../shared/components/gesture-bar';
import {Timer} from '../../shared/components/timer';
import {ITable} from '../../shared/redux/types/table';

import './index.scss';

interface IGameZoneProps {
    index?: number
    table?: ITable
}

export function GameZone(props: IGameZoneProps) {
    return (
        <section className="GameZone-component">
            {props.table && (
                <>
                    <header>
                        <h1>Table #{props.index}</h1>
                        <Timer/>
                    </header>
                    <ComputerGesture/>
                    <GestureBar/>
                </>
            )}
        </section>
    );
}
