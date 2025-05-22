import { Router } from "express";
import bookController from "../controllers/book.controller.js"
const router = Router()

router.get('/', bookController.all)
router.get('/:id', bookController.getById)
router.delete('/:id', bookController.destroy)
router.put('/:id', bookController.update)
router.post('/', bookController.create)

export default router