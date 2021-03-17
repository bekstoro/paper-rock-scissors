import React from 'react';

import {Lobby} from './modules/lobby';
import {GameZone} from './modules/game-zone';

import './App.scss';

function App() {
    return (
        <section>
            <Lobby/>
            <GameZone/>
        </section>
    );
}

export default App;
