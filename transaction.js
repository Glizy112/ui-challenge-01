const statusText = document.getElementById("status");
const statusBox = document.querySelector(".status-box");
const iconBox = document.querySelector(".icon-box");
const icon = document.querySelector("svg");
const checkIcon = document.querySelector("#status-icon-check");
const warningIcon = document.querySelector("#status-icon-warn");

const fns = [
    ()=> showLoadingState(),
    ()=> showSuccessState(),
    ()=> showLoadingState(),
    ()=> showFailState(),
];

const intervalDelay = 2000;
const fnDelay = 1000;

let currentFnIdx = 0;

const scheduler = setInterval(()=> {
    if(currentFnIdx < fns.length) {
        setTimeout(()=> {
            fns[currentFnIdx]();
            currentFnIdx++;
        }, fnDelay);
    } else {
        currentFnIdx = 0;
    }
}, intervalDelay);

const showLoadingState =()=> {
    statusText.innerHTML = "Analyzing Transaction";
    statusText.classList.remove("success", "fail");
    statusBox.classList.remove("success", "fail");
    icon.classList.remove("success", "fail");
    icon.classList.add("show");
    warningIcon.classList.remove("fail");
    if(checkIcon.classList.contains("success")) {
        checkIcon.classList.remove("success");
        checkIcon.classList.add("hide");
    }
}

const showSuccessState =()=> {
    checkIcon.classList.remove("hide");
    checkIcon.classList.add("success");
    statusText.innerHTML = "Transaction Safe";
    statusText.classList.add("success");
    statusBox.classList.add("success");
    icon.classList.add("success");
    icon.classList.remove("show");
    warningIcon.classList.remove("fail"); 
}

const showFailState =()=> {
    icon.classList.remove("show");
    icon.classList.add("fail");
    statusText.innerHTML = "Transaction Warning";
    statusText.classList.add("fail");
    statusBox.classList.add("fail");
    warningIcon.classList.add("fail"); 
}