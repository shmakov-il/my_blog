import {Router} from "express";
import {register, login, getMe} from "../controllers/auth.js";
import {checkAuth} from "../utils/checkAuth.js";

const router = new Router();

// register
router.post('/register', register);

// login
router.post('/login', login);

// getMe
router.get('/me', checkAuth, getMe);

export default router;