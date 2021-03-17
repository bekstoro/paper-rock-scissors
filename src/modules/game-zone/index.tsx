import React from 'react';

import {ComputerGesture} from '../../shared/components/computer-gesture';
import {GestureBar} from '../../shared/components/gesture-bar';
import {Timer} from '../../shared/components/timer';

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
