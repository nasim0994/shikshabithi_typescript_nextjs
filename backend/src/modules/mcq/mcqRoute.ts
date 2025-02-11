import express from 'express';
import { auth } from '../../middlewares/auth';
import verifyValidate from '../../middlewares/verifyValidate';
import {
  createMCQController,
  deleteMCQController,
  getAllMCQController,
  getMCQByIdController,
  updateMCQController,
} from './mcqController';
import { mcqValidation } from './mcqValidation';

const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(mcqValidation),
  createMCQController,
);
Router.get('/all', getAllMCQController);
Router.get('/:id', getMCQByIdController);
Router.patch('/update/:id', auth('admin'), updateMCQController);
Router.delete('/delete/:id', auth('admin'), deleteMCQController);

export const mcqRoute = Router;
