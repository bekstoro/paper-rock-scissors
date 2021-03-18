import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IChipProps {
    type: number
}

export function Chip(props: IChipProps) {
    return (
        <section className={classNames('Chip-component', `Chip-component-${props.type}`)}>
            <h1>{props.type * 0.01}</h1>
        </section>
    );
}
