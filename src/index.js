import './less/index.less'
const headerText = document.querySelectorAll("h2");
headerText.forEach(headline => headline.addEventListener("mouseover", function(event) {
    headline.setAttribute("style", "color:red");
}));
const headerText2 = document.querySelectorAll("h2");
headerText2.forEach(headline => headline.addEventListener("mouseout", function(event) {
    headline.setAttribute("style", "color:black");
}));
const h4TextRed = document.querySelectorAll("h4");
document.addEventListener("keydown", (event) => {
    console.log(`key pressed ${event.key} with code ${event.code}`);
    if (event.code == "ArrowUp") {
        // console.log("pushed");
        h4TextRed[0].setAttribute("style", "color:red");
        h4TextRed[1].setAttribute("style", "color:green");
        h4TextRed[2].setAttribute("style", "color:blue");
    } else if (event.code == "ArrowDown") {
        h4TextRed[0].setAttribute("style", "color:blue");
        h4TextRed[1].setAttribute("style", "color:red");
        h4TextRed[2].setAttribute("style", "color:green");
    } else if (event.code == "ArrowLeft") {
        h4TextRed[0].setAttribute("style", "color:green");
        h4TextRed[1].setAttribute("style", "color:blue");
        h4TextRed[2].setAttribute("style", "color:red");
    }
        else if (event.code == "ArrowRight") {
        h4TextRed[0].setAttribute("style", "color:purple");
        h4TextRed[1].setAttribute("style", "color:purple");
        h4TextRed[2].setAttribute("style", "color:purple");
        };
    
},false);

const linkBoldOn = document.querySelectorAll(".nav-link");
linkBoldOn.forEach(linkName => linkName.addEventListener("mouseover", function(event) {
    linkName.setAttribute("style", "font-weight: bold");
}));
const linkBoldOff = document.querySelectorAll(".nav-link");
linkBoldOff.forEach(linkName => linkName.addEventListener("mouseout", function(event) {
    linkName.setAttribute("style", "font-weight: normal");
}));

const imgRedOn = document.querySelectorAll(".img-content");
imgRedOn.forEach(imgSelect => imgSelect.addEventListener("dblclick", function(event) {
    console.log(`Border: ${imgSelect.getAttribute("border")}`);
    if (imgSelect.getAttribute("border") == null) {
        imgSelect.setAttribute("style", "border: 5px solid red");
    }
}));

imgRedOn.forEach(imgSelect => imgSelect.addEventListener("dblclick", function(event) {
    console.log(`Border: ${imgSelect.getAttribute("border")}`);
    if (imgSelect.getAttribute("border") != null) {
        imgSelect.setAttribute("style", "border: none");
    }
}));

const destImgOn = document.querySelectorAll(".content-destination img");
destImgOn.forEach(imgName => imgName.addEventListener("mouseover", function(event) {
    imgName.setAttribute("style", "border: 3px solid blue");
}));
const destImgOff = document.querySelectorAll(".content-destination img");
destImgOff.forEach(imgName => imgName.addEventListener("mouseout", function(event) {
    imgName.setAttribute("style", "border: none");
}));


// Your code goes here!
