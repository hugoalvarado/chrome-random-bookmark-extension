let openRandomBookmark = document.getElementById('openRandomBookmark');

openRandomBookmark.onclick = function (element) {
    console.log('here');

    chrome.bookmarks.getTree(function (results) {
        let randomLeaf = getRandomLeaf(results[0]);
        debugger
        open(randomLeaf.url);
    });
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomLeaf(bookmarkTree) {
    if (typeof (bookmarkTree.children) != 'undefined') {
        let lenChildren = bookmarkTree.children.length
        return getRandomLeaf(bookmarkTree.children[getRandomInt(lenChildren)])
    } else if (typeof (bookmarkTree.title) != 'undefined') {
        return bookmarkTree;
    }
    return false
}
