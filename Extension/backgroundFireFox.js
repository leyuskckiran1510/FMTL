function updateCount() {
    browser.tabs.query({}).then(function(tabs) {
      var count = tabs.length;
      browser.storage.local.set({count: count});
    });
  }
  
  browser.tabs.onCreated.addListener(updateCount);
  browser.tabs.onRemoved.addListener(updateCount);
  
  browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url.startsWith('https://www.youtube.com')) {
      browser.tabs.executeScript({
        code: 'document.body.innerHTML = "<h1 style=\'text-align: center; font-size: 100px;\'>' +
              'Total open tabs: " + localStorage.getItem("count");'
      });
    }
  });
  