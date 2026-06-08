import mongoose from "mongoose";
const joinuspageschema = new mongoose.Schema({
    tagline: String,
    herosection:{
        title: String,
        description: String
    },
    whyjoinussection:[{
        title: String,
        description: String
    }],
    questionssection:{
        title: String,
        description: String,
        email: String,
        phone: Number,
    }
});


export const joinuspagesschema = mongoose.model("JoinusPage", joinuspageschema);