const express = require("express")
const router = express.Router()
router.get("", (req, res) => {

  const locals = {
    title: "Nodejs Blog ",
    description: "Simple Blog created with Nodejs and Mongo Db "
  }
    res.render("index", locals );
  })
  router.get("/about", (req, res) => {
    res.render("about");
  })

  module.exports = router