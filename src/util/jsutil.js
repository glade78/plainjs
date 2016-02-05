/**
 * Created by glade on 2/15/14.
 */


// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Utils = function () {
    };

    var p = Utils.prototype;

    p.hide = function (el) {
        el.style.display = 'none';
    };

    p.show = function (el) {
        el.style.display = '';
    };

    p.addClass = function (el) {
        if (el.classList)
            el.classList.add(className);
        else
            el.className += ' ' + className;
    };

    p.after = function (el, htmlString) {
        el.insertAdjacentHTML('afterend', htmlString);
    };

    p.append = function (el, parent) {
        parent.appendChild(el);
    };

    p.before = function (el, htmlString) {
        el.insertAdjacentHTML('beforebegin', htmlString);
    };

    p.contains = function (el, child) {
        if (el !== child && el.contains(child)) {
            return true;
        } else {
            return false;
        }
    };

    plainjs.Utils = Utils;

}());

