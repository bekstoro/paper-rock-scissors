import React from 'react';

import {Wallet} from '../wallet';

import './index.scss';

interface IHeaderProps {
    balance: number
}

export function Header(props: IHeaderProps) {
    return (
        <header className="Header-component">
            <Wallet balance={props.balance} label="Balance"/>
        </header>
    );
}
