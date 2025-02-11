import express from 'express';
import { auth } from '../../../middlewares/auth';
import verifyValidate from '../../../middlewares/verifyValidate';
import {
  createChapterController,
  deleteChapterController,
  getAllChapterController,
  getChapterByIdController,
  updateChapterController,
} from './chapterController';
import { chapterValidation } from './chapterValidation';
const Router = express.Router();

Router.post(
  '/add',
  auth('admin'),
  verifyValidate(chapterValidation),
  createChapterController,
);
Router.get('/all', getAllChapterController);
Router.get('/:id', getChapterByIdController);
Router.patch('/update/:id', auth('admin'), updateChapterController);
Router.delete('/delete/:id', auth('admin'), deleteChapterController);

export const chapterRoute = Router;
