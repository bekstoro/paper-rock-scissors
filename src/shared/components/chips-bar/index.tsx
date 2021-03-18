import React from 'react';

import {Chip} from '../chip';

import './index.scss';

export function ChipsBar() {
    return (
        <section className="ChipsBar-component">
            <Chip type={10}/>
            <Chip type={25}/>
            <Chip type={50}/>
        </section>
    );
}
