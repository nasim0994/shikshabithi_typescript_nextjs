import express from 'express';
import {
  createInstituteController,
  deleteInstituteController,
  getAllInstituteController,
  getInstituteByIdController,
  updateInstituteController,
} from './instituteController';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import { instituteValidation } from './instituteValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(instituteValidation),
  createInstituteController,
);
Router.get('/all', getAllInstituteController);
Router.get('/:id', getInstituteByIdController);
Router.patch('/update/:id', auth('admin'), updateInstituteController);
Router.delete('/delete/:id', auth('admin'), deleteInstituteController);

export const instituteRoute = Router;
