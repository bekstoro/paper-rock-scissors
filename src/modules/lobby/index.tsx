import React from 'react';

import {Table} from '../../components/table';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';

import './index.scss';

export function Lobby() {
    return (
        <section>
            <Header/>
            <Table/>
            <Table/>
            <Footer/>
        </section>
    );
}
