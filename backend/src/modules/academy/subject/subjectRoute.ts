import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createSubjectController,
  deleteSubjectController,
  getAllSubjectController,
  getSubjectByIdController,
  updateSubjectController,
} from './subjectController';
import { subjectValidation } from './subjectValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(subjectValidation),
  createSubjectController,
);
Router.get('/all', getAllSubjectController);
Router.get('/:id', getSubjectByIdController);
Router.patch('/update/:id', auth('admin'), updateSubjectController);
Router.delete('/delete/:id', auth('admin'), deleteSubjectController);

export const subjectRoute = Router;
