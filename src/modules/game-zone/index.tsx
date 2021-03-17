import React from 'react';

import {ComputerGesture} from '../../components/computer-gesture';
import {GestureBar} from '../../components/gesture-bar';
import {Timer} from '../../components/timer';

import './index.scss';

export function GameZone() {
    return (
        <section>
            <Timer/>
            <ComputerGesture/>
            <GestureBar/>
        </section>
    );
}
