import express from 'express';
import { toggleListingSave, getSavedListings} from '../controllers/savedListing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/toggle/saved/:listingId', verifyToken, toggleListingSave);
router.get('/user',verifyToken, getSavedListings);


export default router;