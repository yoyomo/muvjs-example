import {muv} from './muv'
import {model, update, view, ignition, subscriptions} from './App';

muv({model, update, view, ignition, subscriptions})('root');
