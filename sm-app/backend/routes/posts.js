import express from "express";
const router = express.Router();

import { getPosts, getPost, getPostsBySearch, createPosts, updatePosts,deletePosts, likePosts } from '../controllers/postsController.js'
import auth from '../middleware/authMiddleware.js'

router.get('/', getPosts)
router.get('/:id', getPost)
router.get('/search', getPostsBySearch)
router.post('/', auth, createPosts)
router.patch('/:id', auth, updatePosts)
router.delete('/:id', auth, deletePosts)
router.patch('/:id/likePost', auth, likePosts)

export default router