import mongoose from 'mongoose';

const homeSchema = new mongoose.Schema({
    heroSection: {
        imageOrVideo: String,
        title: String,
        tagline: String
    },
    statistics : [{
        affiliates: Number,
        members: Number,
        events: Number,
        alumini: Number
    }],
    aboutUs: [{
        ourvision: String,
        ourmission: String,
        ourvalues: String,
    }],
    eventsSpotlight: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    testimonials: [{
        name: String,
        image: String,
        quote: String
    }],
    contactInfo: {
        email: String,
        phone: String,
        address: String
    }
})

export const Home = mongoose.model("Home", homeSchema);