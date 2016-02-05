/**
 * Created by glade on 3/6/14.
 */
// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var PreloadTemplate = function () {
    };

    var p = PreloadTemplate.prototype;

    var loadTemplateQueue = [];
    var queueMax = loadTemplateQueue.length;
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
        currFile = loadTemplateQueue[loadingCount];
        if (currFile) {
            require(currFile, loadCheck);
        }
    }

    function loadCheck() {
        loadingCount += 1;
        if (loadingCount < loadTemplateQueue.length) {
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
        var body = document.getElementsByTagName("body")[0];
        var script = document.createElement('script');
        script.src = file + ".html";
        script.id = file;
        script.type = 'text/html';
        //real browsers
        script.onload = callback;
        //Internet explorer
        script.onreadystatechange = function () {
            if (_this.readyState == 'complete') {
                callback();
            }
        }
        body.appendChild(script);
    };


    p.loadTemplates = function (scriptsArray, callback) {
        loadTemplateQueue = scriptsArray;
        cbfn = callback;
        if (loadTemplateQueue.length > 0) {
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

    plainjs.PreloadTemplate = PreloadTemplate;

}());