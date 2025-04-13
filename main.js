//Creating an initial state to check if the button is clicked or not
const initState = {
    btnClicked: false,
}
//console.log("Before click", initState.btnClicked);

//Accessing the elements in the DOM
const menuButton = document.getElementById("menu_btn");
const menuItems = document.querySelectorAll(".menu-list .list-btn");

//Adding click event to the menu button
menuButton.addEventListener("click", function() {
    
    //Checking if button is already clicked or not
    if(initState.btnClicked) {
        initState.btnClicked = false;
        menuButton.innerHTML = "menu";
        
        menuItems.forEach((item) => {
            item.classList.add("exit");
            item.classList.remove("show");
        });
    }else {
        initState.btnClicked = true;
        menuButton.innerHTML = "close";
        console.log("After click", initState.btnClicked);

        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove("exit");
                item.classList.add("show");
            }, index * 100);
        });
    }
})
