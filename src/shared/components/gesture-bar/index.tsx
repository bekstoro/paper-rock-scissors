import React from 'react';

import {Gesture} from '../gesture';

import './index.scss';

export function GestureBar() {
    return (
        <section className="GestureBar-component">
            <Gesture type="Paper"/>
            <Gesture type="Rock"/>
            <Gesture type="Scissors"/>
        </section>
    );
}
