import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createQuestionSetController,
  deleteQuestionSetController,
  getAllQuestionSetController,
  getQuestionSetByIdController,
  updateQuestionSetController,
} from './questionSetController';
import { jobQuestionSetValidation } from './questionSetValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(jobQuestionSetValidation),
  createQuestionSetController,
);
Router.get('/all', getAllQuestionSetController);
Router.get('/:id', getQuestionSetByIdController);
Router.patch('/update/:id', auth('admin'), updateQuestionSetController);
Router.delete('/delete/:id', auth('admin'), deleteQuestionSetController);

export const jobQuestionSetRoute = Router;
