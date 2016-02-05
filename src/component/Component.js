/**
 * Created by glade on 2/15/14.
 */
// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Component = function () {
    };

    var c = Component.prototype;

    c.id = null; // dom id
    c.element = null; // dom element

    c.style = []; // css style class array

    c.type = null; // component type in OOPs term( can be inherit)
    c.enabled = false; // set component enabled/disabled
    c.value = null; //
    c.valueType = null; // Array,String,Int,Float,Number,Boolean

    //c.width = null; // Optional component width (CSS)
    //c.height = null;// Optional component height (CSS)
    //c.x = null; // Optional component x position (CSS)
    //c.y = null; // Optional component y position (CSS)
    c.parent = null; // set parent when avail in Stage

    /**
     * Component Related Functions
     */

    c.init = function () {

    };

    c.render = function () {

    };

    c.destroy = function () {

    };

    /**
     * Event Related Functions
     */

    c.removeEventListener = function () {

    };

    c.dispatchEvent = function () {

    };

    c.addEventListener = function () {

    };

    plainjs.Component = Component;

}());