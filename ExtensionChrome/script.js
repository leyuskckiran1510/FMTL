let lastDate = new Date()
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

chrome.storage.sync.get((res) => {
    if (Object.keys(res).length == 0) return
    console.log(res)

});

chrome.storage.sync.set({
    "key": 123,
    "allow2": 'facebook',
    "done": 1
}, () => {
    console.log("SucessfullyInserted")
})
chrome.storage.sync.get((res) => {
    if (Object.keys(res).length == 0) return
    console.log(res)

});