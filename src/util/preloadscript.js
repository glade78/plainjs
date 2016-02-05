/**
 * Created by glade on 3/6/14.
 */
// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var PreloadScripts = function () {
    };

    var p = PreloadScripts.prototype;

    var loadScriptQueue = [];
    var queueMax = loadScriptQueue.length;
    var cbfn = emptyFn;
    var loadingCount = 0;
    var currFile = null;

    // private function
    function startLoading() {
        currFile = null;
        loadingCount = 0;
        loadNext();
    }

    function loadNext() {
        currFile = loadScriptQueue[loadingCount];
        if (currFile) {
            require(currFile, loadCheck);
        }
    }

    function loadCheck() {
        loadingCount += 1;
        if (loadingCount < loadScriptQueue.length) {
            loadNext();
        } else {
            loadFinish();
        }
    };

    function loadFinish() {
        showMsg("Script Load Finish");
        cbfn();
    };

    function require(file, callback) {
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        //real browsers
        script.onload = callback;
        //Internet explorer
        script.onreadystatechange = function () {
            if (_this.readyState == 'complete') {
                callback();
            }
        }
        head.appendChild(script);
    };


    p.loadScripts = function (scriptsArray, callback) {
        loadScriptQueue = scriptsArray;
        cbfn = callback;
        if (loadScriptQueue.length > 0) {
            startLoading();
        } else {
            showMsg("Queue is Empty");
        }
    };


    function showMsg(msgStr) {
        console.log(msgStr);
    };

    function emptyFn() {
        showMsg("Empty callback");
    }

    plainjs.PreloadScripts = PreloadScripts;

}());