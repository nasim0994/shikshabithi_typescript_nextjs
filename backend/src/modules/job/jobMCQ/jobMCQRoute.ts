import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createJobMCQController,
  deleteJobMCQController,
  getAllJobMCQController,
  getJobMCQByIdController,
  updateJobMCQController,
} from './jobMCQController';
import { jobMCQValidation } from './jobMCQValidation';

const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(jobMCQValidation),
  createJobMCQController,
);
Router.get('/all', getAllJobMCQController);
Router.get('/:id', getJobMCQByIdController);
Router.patch('/update/:id', auth('admin'), updateJobMCQController);
Router.delete('/delete/:id', auth('admin'), deleteJobMCQController);

export const jobMCQRoute = Router;
