"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hej verden!");
});

function myFunction() {
  var x = document.getElementById("nav");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}