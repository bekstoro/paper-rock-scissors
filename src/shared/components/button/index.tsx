import React from 'react';

import './index.scss';

interface IButtonProps {
    label: string
    onClick(): void
}

export function Button(props: IButtonProps) {
    return (
        <button className="Button-component" onClick={props.onClick}>{props.label}</button>
    );
}
