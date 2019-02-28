
function tag (req, res, next) {
  var tagName = req.params.tagName;
  // if (!tagName || tagName== null) {
  //   res.send("du me")
  //   // res.redirect("/blog");
  // }
  res.render('tag', {
    tagName: tagName
  })
}

module.exports = tag;
