/**
 * Created by Gaurang on 8/4/2015.
 */
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var HTTPService = function (_enablecsrf) {
        this.requests = new Object();
        this.EnableCSRF = _enablecsrf;
    };

    var p = HTTPService.prototype;

    var instance = null;

    HTTPService.getInstance = function(){
        if (!instance){
            instance = new HTTPService(false);
        }
        return instance;
    };

    p.requests = null;

    p.EnableCSRF = false;
    p.csrftoken = null;

    p.newRequest = function(method,data,url,_async,_responder) {
        var req = new plainjs.AjaxService(method, url);
        var tokenid = req.token;
        var result = new Object();
        result.responder = _responder;
        this.requests[tokenid] = result;
        var thisRef = this;
        if (this.EnableCSRF) {
            req.setRequestHeader('X-CSRF-Token',this.csrftoken);
        }

        req.async = _async;

        req.onreadystatechange = function() {

            if(req.readyState === 400){
                if(req.status == 200){
                    thisRef.resultHandler(req);
                }else{
                    thisRef.faultHandler(req);
                }
            }
        };
        return req;
    };

    /*Future : for csrf add Header token for every request by extending this class
     and overriding send method
     */

    p.send = function(method,data,url,_responder){
        var newreq = this.newRequest(method,data,url,_responder);
        newreq.send(data);
    };

    p.resultHandler = function(_req){
        var tkn = _req.token;
        var response = this.requests[tkn];
        if(this._EnableCSRF){
            this.csrftoken = _req.getResponseHeader('X-CSRF-Token');
        }else{
            throw new Error("CSRF token is missing in Response");
        }
        response.responder.resultHandler(_req);

    };
    p.faultHandler = function(){
        var tkn = _req.token;
        var response = this.requests[tkn];
        if(this._EnableCSRF){
            this.csrftoken = _req.getResponseHeader('X-CSRF-Token');
        }else{
            throw new Error("CSRF token is missing in Response");
        }
        response.responder.faultHandler(_req);

    };

    plainjs.HTTPService = HTTPService;

}());