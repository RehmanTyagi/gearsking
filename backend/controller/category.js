import CategoryModel from '../model/Category.js';

// Path: api/v1/category
// Method: GET
// Desc: Get all categories
// Access: Public
export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();

    if (categories.length === 0) {
      throw new Error('No categories found');
    }

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Path: api/v1/category
// Method: POST
// Desc: Create a new category
// Access: Private
export const createCategory = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error('Content can not be empty!');
    }

    await CategoryModel.create(req.body);
    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Path: api/v1/category/:id
// Method: PATCH
// Desc: Update a category
// Access: Private
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.query;
    console.log('id', id);
    const category = await CategoryModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!category) {
      throw new Error('Category not found');
    }

    // save the updated category
    category.save();

    res.status(200).json({ message: 'Category updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Path: api/v1/category/:id
// Method: DELETE
// Desc: Delete a category
// Access: Private
export const deleteCategory = async (req, res) => {
  console.log('query', req.query);
  try {
    const { id, subCategoryId } = req.query;

    if (id && !subCategoryId) {
      const category = await CategoryModel.findByIdAndDelete(id);
      if (!category) {
        throw new Error('Category not found');
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    }

    if (id && subCategoryId) {
      const category = await CategoryModel.findByIdAndUpdate(
        id,
        {
          $pull: { subCategories: { _id: subCategoryId } },
        },
        { new: true }
      );
      if (!category) {
        throw new Error('subCategory not found');
      }

      res.status(200).json({ message: 'Subcategory deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
