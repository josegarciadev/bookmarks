const getBookmarks = (req, res) => {
    // recover all bookmarks here
    res.send([]);
};

const addBookmark = (req, res) => {
    // add the new bookmark, give it an ID and return it
    res.send({});
};

module.exports = { getBookmarks, addBookmark };