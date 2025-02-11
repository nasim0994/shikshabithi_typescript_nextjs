import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createAdmissionMCQController,
  deleteAdmissionMCQController,
  getAllAdmissionMCQController,
  getAdmissionMCQByIdController,
  updateAdmissionMCQController,
} from './admissionMCQController';
import { admissionMCQValidation } from './admissionMCQValidation';

const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(admissionMCQValidation),
  createAdmissionMCQController,
);
Router.get('/all', getAllAdmissionMCQController);
Router.get('/:id', getAdmissionMCQByIdController);
Router.patch('/update/:id', auth('admin'), updateAdmissionMCQController);
Router.delete('/delete/:id', auth('admin'), deleteAdmissionMCQController);

export const admissionMCQRoute = Router;
