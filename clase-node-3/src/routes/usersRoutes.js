import { Router } from "express";
import usersController from "../controllers/usersController.js"

const router = Router();

router.get('/', usersController.getAllUsers)
router.post('/', usersController.createUser)
router.get('/pair-id', usersController.getUsersPairId)
router.get('/:id', usersController.getById)

export default router