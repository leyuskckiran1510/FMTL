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
    "about:blank",
    "moz-extension"
    ]

let check = (url) => {
    for (let i = 0; i < allowed_words.length; i++) {
        if (url.includes(allowed_words[i])) return false
    }
    return true
}

browser.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.url == "browser://newtab/") {
        return
    }
    if (check(details.url)) {
        browser.tabs.update(details.tabId, {
            url: "index.html"
        })
    }
});