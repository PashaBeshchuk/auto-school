const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const SessionsShema = new Schema({
    originalMaxAge: {
        type: Boolean,
        required: true,
        default:null
    },
    expires:{
        type: Boolean,
        required: true,
        default:null
    },
    httpOnly:{
        type: Boolean,
        required: true,
        default:null
    },
    path:{
        type: String,
        required: true,
        default:'/'
    }
})

module.exports = model("session", SessionsShema)