import express from 'express';
import {
  createUniversityController,
  deleteUniversityController,
  getAllUniversityController,
  getUniversityByIdController,
  updateUniversityController,
} from './universityController';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import { universityValidation } from './universityValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(universityValidation),
  createUniversityController,
);
Router.get('/all', getAllUniversityController);
Router.get('/:id', getUniversityByIdController);
Router.patch('/update/:id', auth('admin'), updateUniversityController);
Router.delete('/delete/:id', auth('admin'), deleteUniversityController);

export const universityRoute = Router;
