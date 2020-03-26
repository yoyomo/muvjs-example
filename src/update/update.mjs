import {IncrementAction, DecrementAction, CompleteRequestAction, SignInAction } from './actions.mjs'
import {makeRequest} from '../subscriptions/effects.mjs';

export const update = model => action => {
  let effects = [];
  switch (action.type) {
    case IncrementAction:
      model = { ...model };
      model.count = model.count + 1;
      break;

    case DecrementAction:
      model = { ...model };
      model.count = model.count - 1;
      break;

    case CompleteRequestAction:
      console.log("Request Completed: ", action.xhr.responseText);
      break;

    case SignInAction:
      effects = effects.concat(makeRequest());
      break;
  }
  return {model, effects};
};

