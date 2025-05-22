import { Router } from "express";
import productsController from "../controllers/products.controller.js";

const router = Router();

router.get('/', productsController.getAllProducts);
// 📄 Obtiene todos los productos.

router.get('/:id', productsController.getProductById);
// 🔍 Obtiene un producto por su ID.

router.post('/', productsController.createProduct);
// ➕ Crea un nuevo producto.

router.put('/:id', productsController.updateProduct);
// ✏️ Actualiza un producto existente por ID.

router.delete('/:id', productsController.deleteProduct);
// 🗑️ Elimina un producto por ID.

export default router