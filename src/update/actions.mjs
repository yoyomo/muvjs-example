
export const IncrementAction = "increment";
export const increment = () => {
  return {
    type: IncrementAction
  }
};

export const DecrementAction = "decrement";
export const decrement = () => {
  return {
    type: DecrementAction
  }
};

export const CompleteRequestAction = "complete-request";
export const completeRequest = (xhr) => {
  return {
    type: CompleteRequestAction,
    xhr
  }
};

export const SignInAction = "sign-in";
export const signIn = () => {
  return {
    type: SignInAction
  }
};

