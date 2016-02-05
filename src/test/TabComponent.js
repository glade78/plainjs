/**
 * Created by Gaurang on 7/15/2014.
 */


function addTab(el, tabid, contentEl) {
    // Create Tab Header
    var tabheaderEls = el.querySelector('.' + tabsClassStyle);
    var el1 = document.createElement("li");
    el1.setAttribute('data-target', tabid);
    el1.innerHTML = "<a href='#" + tabid + "'>" + tabid + "<\/a>";
    tabheaderEls.appendChild(el1);

    //create Tab Frame
    var tabFrmEls = el.querySelector('.' + tabframesClassStyle);
    var tabfrmEl = document.createElement("div");
    tabfrmEl.id = tabid;
    tabfrmEl.classList.add(tabframClassStyle);
    tabFrmEls.appendChild(tabfrmEl);
    setTabContent(el, tabid, contentEl);
    var a = 0;
}

function setTabContent(el, tabid, contentEl) {
    var tabFrmEls = el.querySelector('.' + tabframesClassStyle);
    var tabFrm = tabFrmEls.querySelector('#' + tabid);
    tabFrm.innerHTML = contentEl;
}

function getTabContent(el, tabid) {
    var tabFrmEls = el.querySelector('.' + tabframesClassStyle);
    var tabFrm = tabFrmEls.querySelector('#' + tabid);
    return tabFrm.innerHTML;
}

function removeTab(tabid, el) {
    var tabheaderEls = el.querySelector('.' + tabsClassStyle);
    var rmTabHead = tabheaderEls.querySelector('[data-target=' + tabid + ']');
    rmTabHead.parentNode.removeChild(rmTabHead);

    var tabFrmEls = el.querySelector('.' + tabframesClassStyle);
    var rmTabFrm = tabFrmEls.querySelector('#' + tabid);
    rmTabFrm.parentNode.removeChild(rmTabFrm);
}


function showTab(tabid, el) {
    var tabheaderEl = el.querySelector('.' + tabsClassStyle);
    var tabHeadactive = tabheaderEl.querySelector('.' + activeClassStyle);
    var tablabel = tabHeadactive.getAttribute('data-target');
    tabHeadactive.classList.remove(activeClassStyle);

    var framesEl = el.querySelectorAll('.' + tabframClassStyle);
    var i = 0;
    for (len = framesEl.length; i < len; i++) {
        framesEl[i].style.display = hideFrameStyle;
    }

    var showTabHeadEl = tabheaderEl.querySelector('[data-target=' + tabid + ']');
    showTabHeadEl.classList.add(activeClassStyle);
    var showTabFrameEl = el.querySelector('#' + tabid);
    showTabFrameEl.style.display = showFrameStyle;
    var a = 0;

}

function manageTabNavigator(el) {
    //showTab('tab2',el);
    addTab(el, "tab3", "Tab 3 Contents");
    showTab("tab3", el);
    removeTab("tab2", el);
}

var tabframClassStyle = "frame";
var tabframesClassStyle = "frames";
var tabsClassStyle = "tabs";
var activeClassStyle = "active";
var showFrameStyle = "block";
var hideFrameStyle = "none";
var tab_el = document.getElementById("tabNav");
manageTabNavigator(tab_el);