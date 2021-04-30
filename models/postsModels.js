const mongoose = require('mongoose');

const PostsModels = mongoose.model(
    "rouxnicolas",
    {
        name : {
            type: String,
            required: false,
        },
        logo : {
            type: String,
            required: false,
        },
        prestation : {
            type: String,
            required: false,
        },
        price : {
            type: Number,
            required: false,
        },
        facture : {
            type: String,
            required: false,
        },
        secteur : {
            type: String,
            required: false,
        },
        date : {
            type: String,
            required: false,
        },
        contact : {
            type: String,
            required: false,
        },
        mail : {
            type: String,
            required: false,
        },
        phone : {
            type: String,
            required: false,
        },
        details : {
            type: String,
            required: false,
        },

    },
    "clients" || "prospects",
)



module.exports = { PostsModels };