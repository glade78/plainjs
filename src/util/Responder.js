/**
 * Created by Gaurang on 9/16/2015.
 */

// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var Responder = function () {
    };

    var m = Responder.prototype;

    m.resultHandler = function(_req){};
    m.faultHandler = function(_req){};

    plainjs.Responder = Responder;

}());
