/**
 * Created by Gaurang on 1/28/2015.
 */

// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Record = function () {
    };

    var m = Record.prototype;

    var data = null;

    m.Update = function () {

    };

    m.setData = function (tmpdata) {
        if (data == null) {
            data = new Object();
        }
        data = tmpdata;
        ;
    };

    m.getData = function () {
        return data;
    };

    m.reset = function () {
        data = null;
    };

    m.bindEvents = function () {

    };

    m.removeBindEvents = function () {

    };

    m.bindData = function (srcObj, srcProperty, destObj, destProperty) {

    };

    m.importData = function (type, dataObj) {
        //this convert JSON,XML,AMF to dataObj
        //
    };

    m.exportData = function (type) {
        //this convert model data to JSON,XML,AMF
        //
    };


    m.destroyModel = function () {

    };

    plainjs.Record = Record;

}());

