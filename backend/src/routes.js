const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();
const upload = multer(multerConfig);

routes.post('/files', upload.single('file') ,(req, res) => {
    return res.json({ok: true});
})

module.exports = routes;