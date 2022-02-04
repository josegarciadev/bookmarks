const { v4: uuidv4 } = require("uuid");

const Books = [];

const getBookmarks = (req, res) => {
  // recover all bookmarks here
  res.send(Books, 200);
};

const addBookmark = (req, res) => {
  // add the new bookmark, give it an ID and return it
  const { title, link } = req.body;

  let data = {
    id: uuidv4(),
    title, 
    link,
  };
  Books.push(data);
  res.send(data, 200);
};

module.exports = { getBookmarks, addBookmark };
