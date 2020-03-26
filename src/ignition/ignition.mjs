import {signIn} from '../update/actions.mjs';

export const ignition = dispatch => {
  dispatch(signIn());
};

