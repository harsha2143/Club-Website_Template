import express from 'express';
import { joinuspagesschema } from '../models/JoinuspageSchema.js';

export const getjoinuspage =async(req,res)=>{

    try {
        const pageData = await joinuspagesschema.findOne().sort({ createdAt: -1 }).lean();
        
        if (!pageData) {
            return res.status(404).json({ message: 'Page data not found' });
        }

        res.json(pageData);
    } catch (error) {
        console.error('Error fetching page data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
    


