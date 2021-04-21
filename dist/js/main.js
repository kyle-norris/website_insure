function toggleNav() {
  var header = document.getElementById("header");
  var btn = document.getElementById("nav-button");
  if (header.className === "nav-closed") {
    header.className = "nav-open";
    btn.className = "light"
  } else {
    header.className = "nav-closed"
    btn.className = "dark"
  }
} 

