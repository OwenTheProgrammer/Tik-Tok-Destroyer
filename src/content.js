chrome.webRequest.onBeforeRequest.addListener(
    function() {
        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.remove(tab.id);
        });
        chrome.tabs.create({
            url: 'https://www.amazon.ca/Award-Bible-Leather-Look-Letter-Comfort/dp/0718097904/',
            active: true
        });
        return {cancel: true};
    },
    { urls: ["*://www.tiktok.com/*"] }, ["blocking"]
);