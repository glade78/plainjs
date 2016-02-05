/**
 * Created by Gaurang on 2/5/2015.
 */

this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var AjaxService = function (method,url) {
        throw "AjaxService cannot be instantiated.";
    };

    AjaxService._nextID = 1;


    AjaxService.GET = "GET";
    AjaxService.POST = "POST";
    AjaxService.PUT = "PUT";
    AjaxService.DELETE = "DELETE";


    AjaxService.getRequest = function (method,url) {
        if(method == null){
            throw "AjaxService Request Method is null";
        }

        if(url == null){
            throw "AjaxService Request Url is null";
        }

        var req = null;
        if (self.ActiveXObject) {
            req =  ActiveXObject("Microsoft.XMLHTTP");
        }else{
            req =  new XMLHttpRequest;
        }

        req.open(method, url, true);
        req.token = AjaxService._nextID++;
        return req;

    };


    plainjs.AjaxService = AjaxService;

}());