/**
 * Created by glade on 2/15/14.
 */

// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Container = function () {
    };

    var cn = Container.prototype = new plainjs.Component();
    cn.parent = null; // set parent when avail in Stage


    cn.addElement = function (el) {

    };

    cn.removeElement = function (el) {

    };

    cn.removeAllElements = function () {

    };

    cn.getElement = function (elementId) {

    };

    plainjs.Container = Container;

}());
