import mongoose from 'mongoose';

const aluminipageSchema = new mongoose.Schema({
    aluminisection:{
        title: String,
        description: String
    },
    
    gallary:[{
        image:String
    }],
    successsstoriessection:[{
        name: String,
        description: String
    }]
})