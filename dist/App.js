"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var muv_dom_1 = require("./muv-dom");
// MODEL
exports.model = {
    count: 0
};
// UPDATE
var Increment = "increment";
var increment = function () {
    return {
        type: Increment
    };
};
var Decrement = "decrement";
var decrement = function () {
    return {
        type: Decrement
    };
};
var CompleteRequest = "complete-request";
var completeRequest = function (xhr) {
    return {
        type: CompleteRequest,
        xhr: xhr
    };
};
var SignIn = "sign-in";
var signIn = function () {
    return {
        type: SignIn
    };
};
exports.update = function (model) { return function (action) {
    var effects = [];
    switch (action.type) {
        case Increment:
            model = __assign({}, model);
            model.count = model.count + 1;
            break;
        case Decrement:
            model = __assign({}, model);
            model.count = model.count - 1;
            break;
        case CompleteRequest:
            console.log("Request Completed: ", action.xhr.responseText);
            break;
        case SignIn:
            effects = effects.concat(makeRequest());
            break;
    }
    return { model: model, effects: effects };
}; };
// VIEW
exports.view = function (dispatch) { return function (model) {
    return muv_dom_1.div()([
        ,
        muv_dom_1.button({ onclick: function () { return dispatch(decrement()); } })('-'),
        muv_dom_1.div()(model.count),
        muv_dom_1.button({ onclick: function () { return dispatch(increment()); } })('+')
    ]);
}; };
//IGNITION
exports.ignition = function (dispatch) {
    dispatch(signIn());
};
//SUBSCRIPTIONS
var AjaxRequest = "ajax-request";
var makeRequest = function () {
    return {
        type: AjaxRequest
    };
};
exports.subscriptions = function (dispatch) { return function (effect) {
    switch (effect.type) {
        case AjaxRequest:
            var xhr_1 = new XMLHttpRequest();
            xhr_1.open("GET", "http://localhost:8080", true);
            xhr_1.onload = function () {
                dispatch(completeRequest(xhr_1));
            };
            xhr_1.setRequestHeader('Accept', 'application/json');
            xhr_1.setRequestHeader('Content-Type', 'application/json');
            xhr_1.send();
            break;
    }
}; };
//# sourceMappingURL=App.js.map