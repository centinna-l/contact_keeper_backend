const express = require("express");
const router = express.Router();
const contactController = require("./controllers/contactController");

router.get("/home", (req, res) => {
    res.status(200).json({
        "message": "API Router is Up and Running"
    });
})

router.get("/contact", contactController.index);
router.post("/contact", contactController.createContact);

module.exports = router;