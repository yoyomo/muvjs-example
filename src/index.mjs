'use strict';

import {muv} from 'muvjs/muv';
import {model, update, view, ignition, subscriptions} from './App';

muv({model, update, view, ignition, subscriptions})('root');