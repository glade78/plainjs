/**
 * Created by Gaurang on 7/15/2014.
 */

/**
 *
 * MenuBar : add/remove menu
 *      Menu add/remove MenuItem
 *          MenuItem add/remove Submenu
 *              Submenu (Menu)
 *
 *
 *
 */
function addAccordion(el, headerTxt, contentEl) {
    // Create Accordion Element
    var accMainFrmEl = document.createElement("div");
    accMainFrmEl.classList.add(accodnframClassStyle);

    var accHeadFrmEl = document.createElement("a");
    accHeadFrmEl.setAttribute("href", "#");
    accHeadFrmEl.classList.add(accodnHeadClassStyle);
    accHeadFrmEl.innerHTML = headerTxt;
    accMainFrmEl.appendChild(accHeadFrmEl);


    var accContentFrmEl = document.createElement("div");
    accContentFrmEl.classList.add(accodnContentClassStyle);
    accMainFrmEl.appendChild(accContentFrmEl);

    el.appendChild(accMainFrmEl);

    var acindx = getElementNodeIndex(accMainFrmEl);
    setAccordionContent(acindx, el, contentEl);
    var a = 0;
}

function setAccordionContent(accordnIndex, el, contentEl) {
    var accoContentEls = el.querySelectorAll('.' + accodnContentClassStyle);
    var accContentEl = accoContentEls[accordnIndex];
    accContentEl.innerHTML = contentEl;
}

function getAccordionContent(accordnIndex, el) {
    var accoContentEls = el.querySelectorAll('.' + accodnContentClassStyle);
    return accoContentEls[accordnIndex].innerHTML;
}

function removeAccordion(accordnIndex, el) {
    var accrdEls = el.querySelectorAll('.' + accodnframClassStyle);
    var rmAccord = accrdEls[accordnIndex];
    rmAccord.parentNode.removeChild(rmAccord);
}


function expandAccordion(accordnIndex, el) {
    var accoContentEls = el.querySelectorAll('.' + accodnContentClassStyle);
    var accoHeadEls = el.querySelectorAll('.' + accodnHeadClassStyle);
    var i = 0;
    for (len = accoContentEls.length; i < len; i++) {
        accoContentEls[i].style.display = hideFrameStyle;
    }

    var hideAccoHeadEl = el.querySelector("." + activeClassStyle);
    hideAccoHeadEl.classList.remove(activeClassStyle);

    var showAccordEl = accoContentEls[accordnIndex];
    showAccordEl.classList.add(activeClassStyle);
    accoContentEls[accordnIndex].style.display = showFrameStyle;

    var a = 0;

}


function getElementNodeIndex(el) {
    var elNodeList = el.parentNode.querySelectorAll('.' + accodnframClassStyle);
    var i = 0;
    var indx = null;
    var len = elNodeList.length;
    for (; i < len; i++) {
        if (elNodeList[i] === el) {
            indx = i;
            break;
        }
    }
    return indx;
}

function manageAccordionNavigator(el) {
    expandAccordion(1, el);
    addAccordion(el, "Accordion 2", "Accordion 2 Contents");
    expandAccordion(3, el);
    removeAccordion(2, el);
}

var accodnframClassStyle = "accordion-frame";
var accodnContentClassStyle = "content";
var accodnHeadClassStyle = "heading";
var tabsClassStyle = "tabs";
var activeClassStyle = "active";
var showFrameStyle = "block";
var hideFrameStyle = "none";
var acdon_el = document.getElementById("accordionNav");
manageAccordionNavigator(acdon_el);
