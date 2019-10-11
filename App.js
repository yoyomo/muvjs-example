"use strict";

import {button, div} from './node_modules/muvjs/muv-dom.js';

// MODEL

export const init =
  {
    count: 0
  };

// UPDATE

const Increment = "increment";
const Decrement = "decrement";
const Reset = "reset";

export const update = model => action => {
  switch (action) {
    case Increment:
      model = {...model};
      model.count = model.count + 1;
      break;

    case Decrement:
      model = {...model};
      model.count = model.count - 1;
      break;

    case Reset:
      model = {...model};
      model.count = 0;
  }
  return model;
};

// VIEW

export const view = dispatch => model =>
  div()(
    [
      , button({onclick: dispatch(Decrement)})('-')
      , div()(model.count)
      , button({onclick: dispatch(Increment)})('+')
      , button({onclick: dispatch(Reset)})('Reset')
    ]
  );

