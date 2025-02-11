import { catchAsync } from '../../../utils/catchAsync';
import {
  createQuestionSetService,
  deleteQuestionSetService,
  getAllQuestionSetService,
  getQuestionSetByIdService,
  updateQuestionSetService,
} from './questionSetService';

export const createQuestionSetController = catchAsync(async (req, res) => {
  const result = await createQuestionSetService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy QuestionSet created successfully',
    data: result,
  });
});

export const getAllQuestionSetController = catchAsync(async (req, res) => {
  const result = await getAllQuestionSetService();
  res.status(200).json({
    success: true,
    message: 'All Academy QuestionSet get successfully',
    data: result,
  });
});

export const getQuestionSetByIdController = catchAsync(async (req, res) => {
  const result = await getQuestionSetByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy QuestionSet get successfully',
    data: result,
  });
});

export const updateQuestionSetController = catchAsync(async (req, res) => {
  const result = await updateQuestionSetService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy QuestionSet updated successfully',
    data: result,
  });
});

export const deleteQuestionSetController = catchAsync(async (req, res) => {
  const result = await deleteQuestionSetService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy QuestionSet deleted successfully',
    data: result,
  });
});
