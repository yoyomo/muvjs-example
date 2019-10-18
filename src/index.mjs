'use strict';

import {muv} from 'muvjs/muv';
import {model, update, view, ignite, subscriptions} from './App';

muv(model)(update)(view)(ignite)(subscriptions)('root');