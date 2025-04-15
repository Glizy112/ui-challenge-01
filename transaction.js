const statusText = document.getElementById("status");
const statusBox = document.querySelector(".status-box");
const iconBox = document.querySelector(".icon-box");
const icon = document.querySelector("svg");
const checkIcon = document.querySelector("#status-icon-check");
const warningIcon = document.querySelector("#status-icon-warn");

// const initState ={
//     currStat: 1,
// }

var state = 1;

// setTimeout(()=> { [1, 0, 1, 2].map(i=> {
//     console.log(i);
//     setTimeout(()=> {
//         i == 1 ? showLoadingState() : i == 0 ? showSuccessState() : showFailState()
//     }, i*2000);
// })}, 2000);

// Promise.resolve(()=> {
//     showLoadingState();
// }).then(()=> {
//     setTimeout(()=> {
//         showSuccessState();
//     }, 2000);
// }).then(()=> {
//     setTimeout(()=> {
//         showLoadingState();
//     }, 2000);
// }).then(()=> {
//     setTimeout(()=> {
//         showFailState();
//     }, 2000);
// });

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

// setInterval(()=> {
//     setTimeout(()=> {
//         showSuccessState();
//     }, 3000);
//     setTimeout(()=> {
//         showLoadingState();
//     }, 6000);
//     setTimeout(()=> {
//         showFailState();
//     }, 9000);
// }, 11000);

// setTimeout(()=> {
//     showLoadingState().then(()=> {
//     setTimeout(()=> {
//         showSuccessState();
//     }, 2000);
//     }).then(()=> {
//         setTimeout(()=> {
//             showLoadingState();
//         }, 2000);
//     }).then(()=> {
//         setTimeout(()=> {
//             showFailState();
//         }, 2000);
//     });
// }, 3000);

// setInterval (()=> {
//     //state = 0;

//     if (state == 0) {
//         console.log("shifting to success state");
//         showSuccessState();
//         state = 1; 
//      }else if(state == 1) {
//          console.log("shifting to loading state");
//          showLoadingState();
//          state = 2;
//      }
//     console.log(`current state : ${state}`);
//     if (state == 0) {
//        console.log("shifting to success state");
//        showSuccessState();
//        state = 1; 
//     }else if(state == 1) {
//         console.log("shifting to loading state");
//         showLoadingState();
//         state = 2;
//     } else {
//         console.log("shifting to failed state");
//         showFailState();
//         state = 1;
//     }
// }, 3000);

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
    //checkIcon.classList.add("hide");
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
    //checkIcon.classList.add("hide");
    warningIcon.classList.add("fail"); 
}