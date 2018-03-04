"use strict";

console.log("script has started running");

var windowWidth = window.innerWidth;


var centerNavToggle = document.querySelector("#nav-center-toggle");
var navItems = document.querySelector("#main-nav-items");
var sideNav = document.querySelector(".side-nav");
var sideNavCloseButton = document.querySelector("#side-nav-close-button");
var body = document.querySelector("body");

var collapseWidth = 1100;

if (windowWidth < collapseWidth){
	console.log("windowWidth < " + collapseWidth + "; collapsing menu");

	centerNavToggle.classList.remove("hidden");
	centerNavToggle.setAttribute("aria-hidden", "false");


	navItems.classList.add("hidden");
	navItems.setAttribute("aria-hidden", "true");

  sideNavCloseButton.classList.remove("hidden");
  sideNavCloseButton.setAttribute("aria-hidden", "false");

	centerNavToggle.addEventListener("click",
		function(){
			console.log("#nav-toggle has been clicked.");

			if(navItems.classList.contains("hidden")){
				console.log("#nav-items hidden, now showing.");
				navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");
        sideNavCloseButton.classList.remove("hidden");
        sideNavCloseButton.setAttribute("aria-hidden", "false");
        sideNav.style.display = "block";
				body.style.overflow = "hidden";
			}
			else{
				console.log("#nav-items showing, now hiding.");
				navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
				body.style.overflow = "auto";
			}
		})

  sideNavCloseButton.addEventListener("click",
    function () {
      if(navItems.classList.contains("hidden")){
        console.log("#nav-items hidden, now showing.");
        navItems.classList.remove("hidden");
        navItems.setAttribute("aria-hidden", "false");
				body.style.overflow = "hidden";
      }
      else{
        console.log("#nav-items showing, now hiding.");
        navItems.classList.add("hidden");
        navItems.setAttribute("aria-hidden", "true");
        sideNavCloseButton.classList.add("hidden");
        sideNavCloseButton.setAttribute("aria-hidden", "true");
        sideNav.style.display = "none";
				body.style.overflow = "auto";
      }
    });

}
