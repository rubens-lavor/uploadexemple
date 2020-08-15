const routes = require("express").Router();
const multer = require("multer"); //permite realizar uploads
const multerConfig = require("./config/multer");

routes.post("/posts", multer(multerConfig).single("file"), (req, res) => {
    console.log(req.file);

    return res.json({ hello:"world" });
});

module.exports = routes;