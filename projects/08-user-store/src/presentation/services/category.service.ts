import { CategoryModel } from "../../data";
import {
  CreateCategoryDto,
  CustomError,
  UserEntity,
  PaginationDto,
} from "../../domain";

export class CategoryService {
  constructor() {}

  async createCategory(createCategoryDto: CreateCategoryDto, user: UserEntity) {
    const categoryExists = await CategoryModel.findOne({
      name: createCategoryDto.name,
    });
    if (categoryExists) throw CustomError.badRequest("Category alredy exists");

    try {
      const category = new CategoryModel({
        ...createCategoryDto,
        user: user.id,
      });

      await category.save();

      return {
        id: category.id,
        name: category.name,
        available: category.available,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error} `);
    }
  }

  async getCategories(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;

    try {
      // const total = await categoryModel.countDocuments();
      // const categories = await categoryModel
      //   .find()
      //   .skip((page - 1) * limit)
      //   .limit(limit);

      const [total, categories] = await Promise.all([
        CategoryModel.countDocuments(),
        CategoryModel.find()
          .skip((page - 1) * limit)
          .limit(limit),
      ]);

      return {
        page,
        limit,
        total,
        next: `/api/categories?page=${page + 1}&limit=${limit}`,
        prev:
          page - 1 > 0
            ? `/api/categories?page=${page - 1}&limit=${limit}`
            : null,

        categories: categories.map((categorie) => ({
          id: categorie.id,
          name: categorie.name,
          available: categorie.available,
        })),
      };
    } catch (error) {
      throw CustomError.internalServer("Internal Server Error");
    }
  }
}
