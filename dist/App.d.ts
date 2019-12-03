export declare const model: {
    count: number;
};
export declare type Model = typeof model;
declare const Increment = "increment";
declare type IncrementAction = {
    type: typeof Increment;
};
declare const Decrement = "decrement";
declare type DecrementAction = {
    type: typeof Decrement;
};
declare const CompleteRequest = "complete-request";
declare type CompleteRequestAction = {
    type: typeof CompleteRequest;
    xhr: XMLHttpRequest;
};
declare const SignIn = "sign-in";
declare type SignInAction = {
    type: typeof SignIn;
};
export declare type Action = IncrementAction | DecrementAction | CompleteRequestAction | SignInAction;
export declare const update: (model: {
    count: number;
}) => (action: Action) => {
    model: {
        count: number;
    };
    effects: AjaxRequestEffect[];
};
export declare const view: (dispatch: (a: Action) => void) => (model: {
    count: number;
}) => import("./muv-dom").View;
export declare const ignition: (dispatch: (a: Action) => void) => void;
declare const AjaxRequest = "ajax-request";
declare type AjaxRequestEffect = {
    type: typeof AjaxRequest;
};
export declare type Effect = AjaxRequestEffect;
export declare const subscriptions: (dispatch: (a: Action) => void) => (effect: AjaxRequestEffect) => void;
export {};
