import {combineReducers} from 'redux';
import {game} from './game';
import {table} from '../../shared/redux/reducers/table';

export default combineReducers({
    game,
    shared: table
});
