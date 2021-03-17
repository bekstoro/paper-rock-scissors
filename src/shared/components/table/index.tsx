import React from 'react';

import {Button} from '../button';
import {GestureBar} from '../gesture-bar';
import {Scoreboard} from '../scoreboard';
import {Timer} from '../timer';
import {Wallet} from '../wallet';

import './index.scss';

export function Table() {
    return (
        <section>
            <Wallet/>
            <Wallet/>
            <Timer/>
            <Scoreboard/>
            <Button/>
            <GestureBar/>
        </section>
    );
}
