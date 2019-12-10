# MUVisJS example
Both Modular and Static Examples of MuvJS

### Setup
Clone the repository
```bash
git clone git@github.com:yoyomo/muvjs-example.git
cd muvjs-example
```
Run the commands
```bash
npm i
npm start
```
Visit ```http://localhost:8080```,
<br><br>
 and then update `App.mjs` to your liking

## Example

`App.mjs`
```js
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

  ```

Optionally you can add these two functions (After v2)
  ```js

//IGNITION

export const ignition = dispatch => {
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

```

`index.mjs` including `model`,`update`,`view`, and the now optional functions `ignition` and `subscriptions`
```js
'use strict';

import {muv} from 'muvjs/muv';
import {model, update, view, ignition, subscriptions} from './App';

muv({model, update, view, ignition, subscriptions})('root');
```

`index.html`
```html
<!DOCTYPE html>
<html>
<body>
  
<div id='root'></div>
<script type='module' src='index.mjs'></script>

</body>
</html>
```

#### Typescript

Clone the repository `ts`

### Create MuvJS App
You can now use a brew command to create a MuvJS app from scratch: 
https://github.com/yoyomo/create-muvjs-app