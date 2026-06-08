import express from 'express';
import { getjoinuspage } from '../controllers/joinuscontroller.js';
const router = express.Router();

router.get('/', getjoinuspage);

export default router;