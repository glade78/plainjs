/**
 * Created by Gaurang on 7/15/2014.
 */


function addTab(el, tabid, contentEl) {
    // Create Tab Header
    var tabheaderEls = el.querySelector('.tabs');
    var el1 = document.createElement("li");
    el1.setAttribute('data-target', tabid);
    el1.innerHTML = "<a href='#" + tabid + "'>" + tabid + "<\/a>";
    tabheaderEls.appendChild(el1);

    //create Tab Frame
    var tabFrmEls = el.querySelector('.frames');
    var tabfrmEl = document.createElement("div");
    tabfrmEl.id = tabid;
    tabfrmEl.classList.add("frame");
    tabfrmEl.innerHTML = contentEl;
    tabFrmEls.appendChild(tabfrmEl);
    var a = 0;
}

function removeTab(tabid, el) {
    var tabheaderEls = el.querySelector('.tabs');
    var rmTabHead = tabheaderEls.querySelector('[data-target=' + tabid + ']');
    rmTabHead.parentNode.removeChild(rmTabHead);

    var tabFrmEls = el.querySelector('.frames');
    var rmTabFrm = tabFrmEls.querySelector('#' + tabid);
    rmTabFrm.parentNode.removeChild(rmTabFrm);
}


function showTab(tabid, el) {
    var tabheaderEl = el.querySelector('.tabs');
    var tabHeadactive = tabheaderEl.querySelector('.active');
    var tablabel = tabHeadactive.getAttribute('data-target');
    tabHeadactive.classList.remove('active');

    var framesEl = el.querySelectorAll('.frame');
    var i = 0;
    for (len = framesEl.length; i < len; i++) {
        framesEl[i].style.display = hideFrameStyle;
    }

    var showTabHeadEl = tabheaderEl.querySelector('[data-target=' + tabid + ']');
    showTabHeadEl.classList.add('active');
    var showTabFrameEl = el.querySelector('#' + tabid);
    showTabFrameEl.style.display = showFrameStyle;
    var a = 0;

}

function manageTabNavigator(el) {
    //showTab('tab2',el);
    addTab(el, "tab3", "Tab 3 Contents");
    removeTab("tab2", el);
}

var showFrameStyle = "block";
var hideFrameStyle = "none";
var tab_el = document.getElementById("tabNav");
manageTabNavigator(tab_el);
