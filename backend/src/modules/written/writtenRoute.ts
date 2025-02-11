import express from 'express';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import {
  createWrittenController,
  deleteWrittenController,
  getAllWrittenController,
  getWrittenByIdController,
  updateWrittenController,
} from './writtenController';
import { writtenValidation } from './writtenValidation';

const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(writtenValidation),
  createWrittenController,
);
Router.get('/all', getAllWrittenController);
Router.get('/:id', getWrittenByIdController);
Router.patch('/update/:id', auth('admin'), updateWrittenController);
Router.delete('/delete/:id', auth('admin'), deleteWrittenController);

export const writtenRoute = Router;
