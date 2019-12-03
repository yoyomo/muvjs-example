"use strict";
exports.__esModule = true;
var muv_dom_1 = require("./muv-dom");
var handleEffects = function (subscriptions) { return function (effects) {
    if (!effects)
        return;
    effects.map(function (effect) {
        subscriptions(effect);
    });
}; };
function muv(muv) {
    var model = muv.model, update = muv.update, view = muv.view, ignition = muv.ignition, subscriptions = muv.subscriptions;
    return function (rootId) {
        var root = document.getElementById(rootId);
        var oldView;
        var subs;
        var dispatch = function (action) {
            var updated = update(model)(action);
            model = updated.model;
            handleEffects(subs)(updated.effects);
            var newView = view(dispatch)(model);
            muv_dom_1.rerender(root)(oldView)(newView)(0);
            oldView = newView;
        };
        root.innerHTML = null;
        oldView = view(dispatch)(model);
        root.appendChild(oldView.render());
        subs = subscriptions(dispatch);
        ignition(dispatch);
    };
}
exports.muv = muv;
