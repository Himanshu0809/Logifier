chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    document.getElementById("URL").href = 'http://localhost:3000?q='+url;
});

let textLength = 0;
let text = 'Welcome to LogXtension';

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 50);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});