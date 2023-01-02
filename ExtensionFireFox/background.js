let allowed = [
    "duckduckgo.com",
    "google.com",
    "bing.com",
    "chatgpt.com",
    "stackoverflow.com",


    ]


browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com')) {
        browser.tabs.executeScript({
            code: `document.body.innerHTML = "<h1 style='text-align: center; font-size: 100px;'>Today's Challange`
        });
    }
});