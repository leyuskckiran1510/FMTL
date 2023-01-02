function updateCount() {
    chrome.tabs.query({}, function(tabs) {
      var count = tabs.length;
      chrome.storage.local.set({count: count});
    });
  }
  
  chrome.tabs.onCreated.addListener(updateCount);
  chrome.tabs.onRemoved.addListener(updateCount);
  
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com')) {
      chrome.tabs.executeScript({
        code: 'document.body.innerHTML = "<h1 style=\'text-align: center; font-size: 100px;\'>' +
              'Total open tabs: " + localStorage.getItem("count");'
      });
    }
  });
  