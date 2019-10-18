"use strict";
import {div, button} from 'muvjs/muv-dom';

// MODEL

export const model =
  {
    count: 0
  };

// UPDATE

const Increment = "increment";
const increment = () => {
  return {
    type: Increment
  }
};

const Decrement = "decrement";
const decrement = () => {
  return {
    type: Decrement
  }
};

const CompleteRequest = "complete-request";
const completeRequest = (xhr) => {
  return {
    type: CompleteRequest,
    xhr
  }
};

const SignIn = "sign-in";
const signIn = () => {
  return {
    type: SignIn
  }
};

export const update = model => action => {
  let effects = [];
  switch (action.type) {
    case Increment:
      model = { ...model };
      model.count = model.count + 1;
      break;

    case Decrement:
      model = { ...model };
      model.count = model.count - 1;
      break;

    case CompleteRequest:
      console.log("Request Completed: ", action.xhr.responseText);
      break;

    case SignIn:
      effects = effects.concat(makeRequest());
      break;
  }
  return {model, effects};
};

// VIEW 

export const view = dispatch => model =>
  div()(
    [
      , button({ onclick: () => dispatch(decrement()) })('-')
      , div()(model.count)
      , button({ onclick: () => dispatch(increment()) })('+')
    ]
  );

//IGNITION

export const ignite = dispatch => {
  dispatch(signIn());
};

//SUBSCRIPTIONS

const AjaxRequest = "ajax-request";
const makeRequest = () => {
  return {
    type: AjaxRequest
  }
};

export const subscriptions = dispatch => effect => {
  switch (effect.type) {
    case AjaxRequest:
      let xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:8080", true);

      xhr.onload = () => {
        dispatch(completeRequest(xhr));
      };

      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.send({});
      break;
  }


};