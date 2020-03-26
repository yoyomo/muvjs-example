import {div, button} from 'muvjs/muv-dom';
import {decrement, increment} from '../update/actions.mjs';

export const view = dispatch => model =>
  div()(
    [
      , button({ onclick: () => dispatch(decrement()) })('-')
      , div()(model.count)
      , button({ onclick: () => dispatch(increment()) })('+')
    ]
  );

