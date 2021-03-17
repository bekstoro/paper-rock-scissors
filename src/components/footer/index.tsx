import React from 'react';

import {ChipsBar} from '../chips-bar';
import {RoundButton} from '../round-button';

import './index.scss';

export function Footer() {
    return (
        <section>
            <ChipsBar/>
            <RoundButton/>
            <RoundButton/>
        </section>
    );
}
