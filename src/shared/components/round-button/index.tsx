import React from 'react';

import './index.scss';

interface IRoundButtonProps {
    type: string
}

export function RoundButton(props: IRoundButtonProps) {
    return (
        <button className="RoundButton-component">{props.type}</button>
    );
}
