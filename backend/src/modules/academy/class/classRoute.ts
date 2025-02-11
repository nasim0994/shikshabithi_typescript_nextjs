import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import { classValidation } from './classValidation';
import {
  createClassController,
  deleteClassController,
  getAllClassController,
  getClassByIdController,
  updateClassController,
} from './classController';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(classValidation),
  createClassController,
);
Router.get('/all', getAllClassController);
Router.get('/:id', getClassByIdController);
Router.patch('/update/:id', auth('admin'), updateClassController);
Router.delete('/delete/:id', auth('admin'), deleteClassController);

export const classRoute = Router;
