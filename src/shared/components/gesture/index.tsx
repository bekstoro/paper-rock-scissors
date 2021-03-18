import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IGestureProps {
    type: string
}

export function Gesture(props: IGestureProps) {
    return (
        <section className={classNames('Gesture-component', `Gesture-component-${props.type}`)}>
            {props.type}
        </section>
    );
}
