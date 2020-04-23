
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("topNavigationBar").style.padding = "2px 10px";
    document.getElementById("logo").height = "40";
  } else {
    document.getElementById("topNavigationBar").style.padding = "60px 10px";
	document.getElementById("logo").height = "50";
  }
}

function sideBar_open() {
  document.getElementById("sideBar").style.display = "block";
}

function sideBar_close() {
  document.getElementById("sideBar").style.display = "none";
}