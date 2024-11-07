import express from 'express';
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from '../controller/category.js';

const Router = express.Router();

Router.route('/')
  .get(getCategories)
  .post(createCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

export default Router;
