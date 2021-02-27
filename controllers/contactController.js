const Contact = require("../models/contactModel");


exports.index = (req, res) => {
    Contact.find((err, contacts) => {
        if (err) {
            console.log(err);
            res.status(404).json({ err })
        }
        if (contacts.length < 1) {
            res.status(200).json({
                "data": "No Contacts Found, Seems empty!"
            })
        }
        res.status(200).json({
            "data": contacts
        })
    });
}

exports.createContact = async (req, res) => {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.save((err) => {
        if (err) {
            res.status(400).json({
                "data": err
            })
        }
        res.status(200).json({
            "data": "New Contact Created"
        })
    })
}