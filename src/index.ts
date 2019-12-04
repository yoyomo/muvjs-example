import {model, update, view, ignition, subscriptions} from './App';
import {muv} from "muvjs/muv";

muv({model, update, view, ignition, subscriptions})('root');
