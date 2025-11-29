import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';

interface CategoryPaginationOptions extends IPaginationOptions {
  search?: string;
  searchField?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
}

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return this.categoryRepository.save(category);
  }

  async findAll(options: CategoryPaginationOptions): Promise<Pagination<Category>> {
    const { search, searchField, sortBy, sortOrder } = options;

    const queryBuilder = this.categoryRepository.createQueryBuilder('category');

    // Campos permitidos para búsqueda y ordenamiento (evitar SQL injection)
    const allowedSearchFields = ['name'];
    const allowedSortFields = ['id', 'name'];

    if (search && searchField && allowedSearchFields.includes(searchField)) {
      queryBuilder.andWhere(
        `LOWER(category.${searchField}) LIKE :search`,
        { search: `%${search.toLowerCase()}%` },
      );
    }

    const orderField = sortBy && allowedSortFields.includes(sortBy) ? sortBy : 'id';
    const orderDirection: 'ASC' | 'DESC' =
      sortOrder === 'DESC' ? 'DESC' : 'ASC';

    queryBuilder.orderBy(`category.${orderField}`, orderDirection);

    return paginate<Category>(queryBuilder, {
      page: options.page,
      limit: options.limit,
    });
  }

  findOne(id: string) {
    return this.categoryRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;
    Object.assign(category, updateCategoryDto);
    return this.categoryRepository.save(category);
  }

  async remove(id: string) {
    const category = await this.categoryRepository.findOne({ where: { id } });
    if (!category) return null;
    return this.categoryRepository.remove(category);
  }
}
