"use strict";

//Function to toggle the display "add Experiences Here" Bar
//By default this bar is hidden
var displayExp = true;
var showHide = function showHide() {

        if (displayExp === false) {
                document.getElementById('newExp').style.visibility = "hidden";
                displayExp = true;
                console.log("Exp Entry Hidden");
        } else {
                document.getElementById('newExp').style.visibility = "visible";
                displayExp = false;
                console.log("Exp Entry Shown");
        }
};

//New Experiences Variable and new List element
var experience = void 0;
var newExpLi = void 0;

var addExp = function addExp() {

        //Takes the information in the expEntry field and attaches it to the Experience div in the html file
        experience = document.getElementById('expEntry').value;
        console.log("Experience added");
        console.log(experience);
        var expList = document.querySelector(".expList");

        newExpLi = document.createElement("li");
        expList.appendChild(newExpLi);
        newExpLi.textContent = experience;
        console.log("New Experience:" + " " + experience);
};

//Function to toggle the display "add References Here" Bar
//By default this bar is hidden
var displayRef = true;

var showHideRef = function showHideRef() {
        if (displayRef === true) {
                document.getElementById('newRef').style.visibility = "visible";
                displayRef = false;
                console.log("Ref Entry Shown");
        } else {
                document.getElementById('newRef').style.visibility = "hidden";
                displayRef = true;
                console.log("Ref Entry Hidden");
        }
};

//List of new References Array
var references = void 0;
var newRefLi = void 0;

//Function to add new references to the reference list
var addRef = function addRef() {

        //Takes the information in the refEntry field and attaches it to the Reference div in the html file
        references = document.getElementById('refEntry').value;
        console.log("References added");
        console.log(references);
        var refList = document.querySelector(".refList");

        newRefLi = document.createElement("li");
        refList.appendChild(newRefLi);
        newRefLi.textContent = references;
        console.log("New Reference:" + " " + references);
};
