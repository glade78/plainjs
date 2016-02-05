/**
 * Created by glade on 2/15/14.
 */


// Collapse and expand the relevent element

// Get the "hidden" height of a collapsed element

var selectedAccrMenu = null;


function bindAccordin(el) {
    var thisRef = this;
    // Set event listeners for collapsible menus
    var collapsibles = el.querySelectorAll('[data-toggle=collapse]');
    var i = 0;
    for (len = collapsibles.length; i < len; i++) {
        collapsibles[i].onclick = thisRef.doAccordinCollapse;
    }
}

function showAccordin(el) {
    var target = el;
    //var targetHeight = getHiddenHeight(target);
    var className = (' ' + target.className + ' ');

    // Show the element
    target.className += ' in ';
    // target.style.height = targetHeight + 'px';

}

function hideAccordin(el) {
    var target = el;
    // var targetHeight = getHiddenHeight(target);
    var className = (' ' + target.className + ' ');

    // Hide the element
    className = className.replace(' in ', ' ');
    target.className = className;
    // target.style.height = '0';

}

function doToggleCollapse(el) {
    var evTarget = el;
    var dataTarget = evTarget.getAttribute('data-target');
    var target = document.querySelector(dataTarget);
    //var targetHeight = getHiddenHeight(target);
    var className = (' ' + target.className + ' ');

    if (className.indexOf(' ' + 'in' + ' ') > -1) {
        // Hide the element
        className = className.replace(' in ', ' ');
        target.className = className;
        //target.style.height = '0';
    } else {
        // Show the element
        target.className += ' in ';
        //target.style.height = targetHeight + 'px';
    }
    return false;
}


function doAccordinCollapse(event) {
    var el = document.getElementById("accordion");
    var collapsibles = el.querySelectorAll('[data-parent=accordion]');

    var evt = event || window.event;
    var evTarget = evt.currentTarget || evt.srcElement;
    var dataTarget = evTarget.getAttribute('data-target');

    var target = el.querySelector(dataTarget);
    var className = (' ' + target.className + ' ');
    var isShow = (className.indexOf(' ' + 'in' + ' ') > -1);
    var i = 0;
    var dataTarget2 = null;
    var tar2 = null;
    // var expandel = el.getElementsByClassName(' ' + 'in' + ' ');
    // if(expandel){
    //    hideAccordin(expandel);
    // }
    for (i, len = collapsibles.length; i < len; i++) {
        dataTarget2 = collapsibles[i].getAttribute('data-target');
        tar2 = el.querySelector(dataTarget2);
        hideAccordin(tar2);
    }
    if (!isShow) {
        showAccordin(target);
    }
}


var el = document.getElementById("testButt");
var util = new plainjs.Utils();
util.hide(el);

var computil = new plainjs.CompUtil();


var cmb_el = document.getElementById("myCombo");
cmb_el.onclick = computil.doDropdown;
cmb_el.onblur = computil.closeDropdown;


/**
 * Accordin Logic
 * Expand Collapse
 * 1) Find index of clicked element
 * 2) Find state of clicked element
 * 3) Find index of current expand element
 * 4) Collapse current expand element
 * 5) Expand clicked / next element
 * @type {HTMLElement}
 */

var accdin_el = document.getElementById("accordion");
bindAccordin(accdin_el);

/**
 * Menu Logic
 * Selected Menu Item and its Index
 * Expand Collapse
 * 1) Find index of clicked element
 */



/**
 * Tree Logic
 * Selected Node Item and its Index
 * Expand Collapse
 * 1) Find index of clicked element
 */


/**
 *  navigation :
 *  Tab Navigator
 *  Menu
 *  Wizard
 *  Tree
 *  Accordin
 *
 */

/**
 *  Containers :
 *  Scroll Pane
 *  Panel
 *  Group
 *  HGroup
 *  VGroup
 *  Window
 *  Alert Panel
 *  Modal Panel
 *  Success / Error Panel
 */


/**
 * Layout :
 * Grid
 * North/South/West/East
 * Card / ViewStack
 */




/**
 *  List
 */

/**
 *  Table
 */

/**
 *  Form Components
 *
 */


/**
 *  Event Bus
 *  Event Dispatcher
 *  Event Channel
 *  Event
 */


/**
 *  Application
 *  Module
 *  Controller
 *  View
 *  Model
 *  Store / Collection
 *
 */


/**
 *  Validation
 *
 */

/**
 *
 *
 */
