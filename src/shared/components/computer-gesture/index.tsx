import React from 'react';

import {Gesture} from '../gesture';

import './index.scss';

export function ComputerGesture() {
    return (
        <section className="ComputerGesture-component">
            <Gesture type="Paper"/>
        </section>
    );
}
