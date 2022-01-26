const CategoryRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);
    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { name } = request.body;
    const { id } = request.params;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findById(id);
    if (!categoryExists) {
      return response.status(400).json({ error: 'Category doesn`t exist' });
    }

    const category = await CategoryRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;
    await CategoryRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
