chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    console.log(url);
    document.getElementById("URL").href = 'http://localhost:3000?q='+url;
});

