chrome.runtime.onInstalled.addListener(function () {
    //None
});


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.bookmarks.getTree(function (results) {
        let bookmarks = flattenBookmarkTree(results[0]);
        let selected = getRandomInt(bookmarks.length);
        open(bookmarks[selected].url);
    });
});


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function flattenBookmarkTree(bookmarkTree) {
    let bookmarkList = Array();
    for (let i = 0; i < bookmarkTree.children.length; i++) {
        let current = bookmarkTree.children[i];
        if (typeof (current.children) != 'undefined') {
            let subList = flattenBookmarkTree(current);
            bookmarkList = bookmarkList.concat(subList);
        } else if (typeof (current.title) != 'undefined') {
            bookmarkList.push(current);
        }
    }
    return bookmarkList;
}
