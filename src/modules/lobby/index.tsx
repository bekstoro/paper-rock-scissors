import React from 'react';

import {Table} from '../../shared/components/table';
import {Header} from '../../shared/components/header';
import {Footer} from '../../shared/components/footer';

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
