

/*

function getViewportSize() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return {width: width, height: height};
}

var viewportSize = getViewportSize();
alert("Width: " + viewportSize.width + ", Height: " + viewportSize.height);
*/

/* Date */

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = today.toLocaleString('default', { month: 'long' }); // get month name
var yyyy = today.getFullYear();

today = mm + ' ' + dd + ', ' + yyyy;
document.getElementById("date").innerHTML = "Account hacked " + today;

/* To set button location */

let startBtn = document.getElementById("start_btn").onclick = function () {
    location.href = "login.html";
}