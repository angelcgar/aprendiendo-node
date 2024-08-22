import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ProductController } from "./controller";
import { ProductService } from "../services/product.service";

export class ProductsRoutes {
  static get routes(): Router {
    const router = Router();
    const productService = new ProductService();
    const controller = new ProductController(productService);

    // Definir las rutas
    router.get("/", controller.getProducts);
    // Este middleware valida al usuario si tiene un token de acceso
    router.post("/", [AuthMiddleware.validatedJWT], controller.createProduct);

    return router;
  }
}
