"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var name = document.getElementById('name');
  console.log(name);
  var password = document.getElementById('password');
  var form = document.getElementById('form');
  var errorElement = document.getElementById('error');
  var send = document.getElementById('submit');
  send.addEventListener('click', function () {
    if (name.value === "") {
      alert("name has no value");
    }

    if (subject.value === "") {
      alert("subject has no value");
    }

    if (phone.value === "") {
      alert("phone has no value");
    }

    if (email.value === "") {
      alert("email has no value");
    }
  });
});