"use strict";

import {muv} from "./node_modules/muvjs/muv.js";
import {init, update, view} from "./App.js";

muv(init)(update)(view)("root");