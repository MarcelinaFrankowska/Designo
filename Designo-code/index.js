function myFunction() {
    let menu = document.getElementById("myLinks");
    let icon=document.getElementById("icon");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        icon.src="./assets/shared/mobile/icon-hamburger.svg";
    } else {
        menu.style.display = "block";
        icon.src="./assets/shared/mobile/icon-close.svg";
    }
  }
