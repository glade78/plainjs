/**
 * Created by glade on 2/16/14.
 */


// namespace:
this.plainjs = this.plainjs || {};

(function () {
    "use strict";

    var CompUtil = function () {
    };

    var p = CompUtil.prototype;

    /**
     * Combobox
     * @param event
     * @returns {boolean}
     */

        // Show a dropdown menu
    p.doDropdown = function (event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var target = evTarget.parentElement;
        var className = (' ' + target.className + ' ');

        if (className.indexOf(' ' + 'open' + ' ') > -1) {
            // Hide the menu
            className = className.replace(' open ', ' ');
            target.className = className;
        } else {
            // Show the menu
            target.className += ' open ';
        }
        return false;
    }

    // Close a dropdown menu
    p.closeDropdown = function (event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var target = evTarget.parentElement;

        target.className = (' ' + target.className + ' ').replace(' open ', ' ');
        return false;
    }


    /**
     * Accordin
     * @param event
     * @returns {boolean}
     */


    function getHiddenHeight(el) {
        var children = el.children;
        var height = 0;
        for (var i = 0, len = children.length, child; i < len; i++) {
            child = children[i];
            height += Math.max(child['clientHeight'], child['offsetHeight'], child['scrollHeight']);
        }
        return height;
    }

    p.doCollapse = function (event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var dataTarget = evTarget.getAttribute('data-target');
        var target = document.querySelector(dataTarget);
        var targetHeight = getHiddenHeight(target);
        var className = (' ' + target.className + ' ');

        if (className.indexOf(' ' + 'in' + ' ') > -1) {
            // Hide the element
            className = className.replace(' in ', ' ');
            target.className = className;
        } else {
            // Show the element
            target.className += ' in ';
        }
        return false;
    }

    plainjs.CompUtil = CompUtil;
}());
