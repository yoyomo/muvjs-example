# muvjs-example
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
Visit ```localhost:3000```,
<br><br>
 and then update `App.js` to your liking

### Example
`App.js`
```js
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


```

### Create MuvJS App
You can now use a brew command to create a MuvJS app from scratch: 
https://github.com/yoyomo/create-muvjs-app