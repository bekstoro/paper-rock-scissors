import React from 'react';

import './index.scss';

interface IWalletProps {
    label: string
    balance: number
}

export function Wallet(props: IWalletProps) {
    return (
        <section className="Wallet-component">
            <h1>{props.label}</h1>
            <h2>{props.balance}</h2>
        </section>
    );
}
