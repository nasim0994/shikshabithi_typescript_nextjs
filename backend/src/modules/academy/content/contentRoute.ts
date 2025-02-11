import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createContentController,
  deleteContentController,
  getAllContentController,
  getContentByIdController,
  updateContentController,
} from './contentController';
import { contentValidation } from './contentValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(contentValidation),
  createContentController,
);
Router.get('/all', getAllContentController);
Router.get('/:id', getContentByIdController);
Router.patch('/update/:id', auth('admin'), updateContentController);
Router.delete('/delete/:id', auth('admin'), deleteContentController);

export const contentRoute = Router;
