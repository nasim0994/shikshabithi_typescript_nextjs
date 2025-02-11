import express from 'express';
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getCategoryByIdController,
  updateCategoryController,
} from './categoryController';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import { categoryValidation } from './categoryValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(categoryValidation),
  createCategoryController,
);
Router.get('/all', getAllCategoryController);
Router.get('/:id', getCategoryByIdController);
Router.patch('/update/:id', auth('admin'), updateCategoryController);
Router.delete('/delete/:id', auth('admin'), deleteCategoryController);

export const categoryRoute = Router;
