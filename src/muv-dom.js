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
exports.__esModule = true;
exports.isNull = function (value) { return value === undefined || value === null; };
exports.isArray = function (a) { return !exports.isNull(a) && a instanceof Array; };
var setAttributes = function (element) { return function (attributes) {
    if (exports.isNull(attributes))
        return;
    for (var attr in attributes) {
        if (typeof attributes[attr] === "function") {
            element[attr] = attributes[attr];
        }
        else {
            element.setAttribute(attr, attributes[attr]);
        }
    }
}; };
var appendChildren = function (element) { return function (child) { return function (index) {
    if (exports.isNull(child))
        return;
    if (typeof child === "object") {
        if (exports.isArray(child)) {
            child.map(function (c, i) { return appendChildren(element)(c)(i); });
        }
        else {
            element.appendChild(child.render(element.getAttribute("key"), index));
        }
    }
    else {
        element.innerText = child;
    }
}; }; };
function component(elementType) {
    return function (attributes) { return function () {
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        return {
            elementType: elementType,
            attributes: attributes,
            children: children.flat(),
            genKey: function (parentKey, index) {
                var geneKey = parentKey ? parentKey + "-" + index + "-" : "";
                this.attributes = this.attributes || {};
                this.attributes["key"] = geneKey + elementType;
            },
            render: function (parentKey, index) {
                var element = document.createElement(elementType);
                this.genKey(parentKey, index);
                setAttributes(element)(this.attributes);
                appendChildren(element)(this.children)(0);
                return element;
            }
        };
    }; };
}
exports.component = component;
exports.rerender = function (parent) { return function (oldView) { return function (newView) { return function (index) {
    if (typeof oldView !== "object" && typeof newView !== "object") {
        if (oldView !== newView) {
            parent.innerText = newView;
            parent.value = newView;
        }
        return;
    }
    if (exports.isNull(newView)) {
        if (!exports.isNull(parent.children[index]))
            parent.removeChild(parent.children[index]);
        return;
    }
    if (exports.isNull(oldView) && newView.render) {
        parent.appendChild(newView.render(parent.getAttribute("key"), index));
        return;
    }
    if ((!newView.attributes || !newView.attributes["key"]) && newView.genKey) {
        newView.genKey(parent.getAttribute("key"), index);
    }
    if (oldView.elementType === newView.elementType && oldView.attributes["key"] === newView.attributes["key"]) {
        if (JSON.stringify(oldView.attributes) !== JSON.stringify(newView.attributes)) {
            var element = parent.children[index] || parent;
            for (var attr in __assign(__assign({}, oldView.attributes), newView.attributes)) {
                if (oldView.attributes[attr] !== newView.attributes[attr]) {
                    if (typeof newView.attributes[attr] === "function") {
                        element[attr] = newView.attributes[attr];
                    }
                    else {
                        element.setAttribute(attr, newView.attributes[attr]);
                    }
                }
            }
        }
        var newChildren = newView.children;
        var oldChildren = oldView.children;
        var childrenNum = newChildren.length >= oldChildren.length ? newChildren.length : oldChildren.length;
        for (var i_1 = 0; i_1 < childrenNum; i_1++) {
            exports.rerender(parent.children[index])(oldChildren[i_1])(newChildren[i_1])(i_1);
        }
    }
    else {
        parent.insertBefore(newView.render(parent.getAttribute("key"), index), parent.children[index]);
        parent.removeChild(parent.children[index + 1]);
    }
}; }; }; };
exports.div = component('div');
exports.button = component('button');
exports.label = component('label');
exports.input = component('input');
exports.textarea = component('textarea');
exports.ul = component('ul');
exports.li = component('li');
exports.img = component('img');
exports.a = component('a');
exports.abbr = component('abbr');
exports.address = component('address');
exports.area = component('area');
exports.article = component('article');
exports.aside = component('aside');
exports.audio = component('audio');
exports.b = component('b');
exports.base = component('base');
exports.bdo = component('bdo');
exports.blockquote = component('blockquote');
exports.body = component('body');
exports.br = component('br');
exports.canvas = component('canvas');
exports.caption = component('caption');
exports.cite = component('cite');
exports.code = component('code');
exports.col = component('col');
exports.colgroup = component('colgroup');
exports.datalist = component('datalist');
exports.dd = component('dd');
exports.del = component('del');
exports.details = component('details');
exports.dfn = component('dfn');
exports.dialog = component('dialog');
exports.dl = component('dl');
exports.dt = component('dt');
exports.em = component('em');
exports.embed = component('embed');
exports.fieldset = component('fieldset');
exports.figcaption = component('figcaption');
exports.figure = component('figure');
exports.footer = component('footer');
exports.form = component('form');
exports.head = component('head');
exports.header = component('header');
exports.h1 = component('h1');
exports.h2 = component('h2');
exports.h3 = component('h3');
exports.h4 = component('h4');
exports.h5 = component('h5');
exports.h6 = component('h6');
exports.hr = component('hr');
exports.html = component('html');
exports.i = component('i');
exports.iframe = component('iframe');
exports.ins = component('ins');
exports.kbd = component('kbd');
exports.legend = component('legend');
exports.link = component('link');
exports.map = component('map');
exports.mark = component('mark');
exports.menu = component('menu');
exports.meta = component('meta');
exports.meter = component('meter');
exports.nav = component('nav');
exports.object = component('object');
exports.ol = component('ol');
exports.optgroup = component('optgroup');
exports.option = component('option');
exports.output = component('output');
exports.p = component('p');
exports.param = component('param');
exports.pre = component('pre');
exports.progress = component('progress');
exports.q = component('q');
exports.s = component('s');
exports.samp = component('samp');
exports.script = component('script');
exports.section = component('section');
exports.select = component('select');
exports.small = component('small');
exports.source = component('source');
exports.span = component('span');
exports.strong = component('strong');
exports.style = component('style');
exports.sub = component('sub');
exports.summary = component('summary');
exports.sup = component('sup');
exports.table = component('table');
exports.tbody = component('tbody');
exports.td = component('td');
exports.tfoot = component('tfoot');
exports.th = component('th');
exports.thead = component('thead');
exports.tr = component('tr');
exports.time = component('time');
exports.title = component('title');
exports.track = component('track');
exports.u = component('u');
exports.varElement = component('var');
exports.video = component('video');
