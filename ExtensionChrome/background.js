let allowed_words = [
    "duckduckgo.com",
    "google.com",
    "openai",
    "stackoverflow.com",
    "github.com",
    "ycombinator.com",
    "reddit.com/r/programming",
    "codecademy.com",
    "freecodecamp.org",
    "coursera.org",
    "edx.org",
    "udemy.com/",
    "khanacademy.org",
    "about:blank"
    ]

let check = (url) => {
    for (let i = 0; i < allowed_words.length; i++) {
        if (url.includes(allowed_words[i])) return false
    }
    return true
}

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.url == "chrome://newtab/") {
        return
    }
    if (check(details.url) && details.frameType == "outermost_frame") {
        chrome.tabs.update(details.tabId, {
            url: "index.html"
        })
    }
});