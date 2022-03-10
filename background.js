chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url.indexOf("https://twitter.com/notifications") > -1) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["patch.js"],
        })
    }
})
