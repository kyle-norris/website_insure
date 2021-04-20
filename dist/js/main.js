function myFunction() {
  var x = document.getElementById("mobileNav");
  if (x.className === "mobileNav") {
    x.className += " open";
  } else {
    x.className = "mobileNav";
  }
} 