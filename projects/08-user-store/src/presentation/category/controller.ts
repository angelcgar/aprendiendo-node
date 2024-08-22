import { Request, Response } from "express";
import { CreateCategoryDto, CustomError, PaginationDto } from "../../domain";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: "Internal server error" });
  };

  createCategory = async (req: Request, res: Response) => {
    const [error, createdCategoryDto] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json(error);

    this.categoryService
      .createCategory(createdCategoryDto!, req.body.user)
      .then((catefory) => res.status(201).json(catefory))
      .catch((error) => this.handleError(error, res));
  };

  getCategories = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json(error);

    this.categoryService
      .getCategories(paginationDto!)
      .then((categories) => res.status(200).json(categories))
      .catch((error) => this.handleError(error, res));
  };
}
