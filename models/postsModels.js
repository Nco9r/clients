const mongoose = require('mongoose');

const PostsModels = mongoose.model(
    "rouxnicolas",
    {
        name : {
            type: String,
            required: true,
        },
        logo : {
            type: String,
            required: true,
        },
        prestation : {
            type: String,
            required: true,
        },
        price : {
            type: Number,
            required: true,
        },
        facture : {
            type: String,
            required: true,
        },
        secteur : {
            type: String,
            required: true,
        },
        date : {
            type: String,
            required: true,
        },
        contact : {
            type: String,
            required: true,
        },
        mail : {
            type: String,
            required: true,
        },
        phone : {
            type: String,
            required: true,
        },
        details : {
            type: String,
            required: true,
        },

    },
    "clients" || "prospects",
)



module.exports = { PostsModels };