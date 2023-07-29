// word counter js

let textArea = document.getElementById("text");

textArea.addEventListener('input', function () {
    let text = this.value;
    // for characters
    document.getElementById("ch").innerHTML = text.length;

    // for words
    let words = text.split(" ");
    let clean = words.filter(function (e) {
        return e != "";
    });
    document.getElementById("wd").innerHTML = clean.length;

});

// background changer js

let bg = document.getElementsByClassName("bg");
let bg1 = document.getElementById("bg1");
let bg2 = document.getElementById("bg2");
let bg3 = document.getElementById("bg3");
let bg4 = document.getElementById("bg4");
let custom = document.getElementById("custom");

bg1.addEventListener('click', function () {
    document.body.style.background = 'url("../images/background1.jpeg") no-repeat center center/cover';
    let cls = document.getElementsByClassName("clr");
    for (let elm of cls) {
        elm.style.cssText = "background-color:rgb(54 33 19 / 80%);";
    }
});

bg2.addEventListener('click', function () {
    document.body.style.background = 'url("../images/background2.jpeg") no-repeat center center/cover';
    let cls = document.getElementsByClassName("clr");
    for (let elm of cls) {
        elm.style.cssText = "background-color:rgb(90 70 68 / 80%);";
    }
});
bg3.addEventListener('click', function () {
    document.body.style.background = 'url("../images/background3.jpeg") no-repeat center center/cover';
    let cls = document.getElementsByClassName("clr");
    for (let elm of cls) {
        elm.style.cssText = "background-color:rgb(115 81 68 / 70%);";
    }
});
bg4.addEventListener('click', function () {
    document.body.style.background = 'url("../images/background4.jpeg") no-repeat center center/cover';
    let cls = document.getElementsByClassName("clr");
    for (let elm of cls) {
        elm.style.cssText = "background-color:rgb(38 39 54 / 80%);";
    }
});

custom.addEventListener('click', colorSelected);
function colorSelected(element) {
    document.body.style.background = element.value;
    document.body.style.background += 'url("../images/butterfly.png") ';
    let cls = document.getElementsByClassName("clr");
    for (let elm of cls) {
        elm.style.cssText = "background-color:rgb(38 39 54 / 50%);";
    }
}
