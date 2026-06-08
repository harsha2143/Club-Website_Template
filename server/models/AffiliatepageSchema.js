import mongoose from 'mongoose';

const affiliatepageSchema = new mongoose.Schema({
    affiliatesection:[{
        title: String,
        description: String,
    }],
    whoaffiliatesection:[{
        title: String,
        description: String,
    }],
    statistics:[{
        firstyear: Number,
        secondyear: Number,
        thirdyear: Number,
        fourthyear: Number
    }],
    yearwiseaffiliatesData:[{
        
    }],
    whataffiliatesgetection:[{
        title: String,
        services:{
            type: String
        }
    }]
})

export const Home = mongoose.model("Affiliatespage", affiliatepageSchema);