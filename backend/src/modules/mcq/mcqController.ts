import { catchAsync } from '../../utils/catchAsync';
import {
  createMCQService,
  deleteMCQService,
  getAllMCQService,
  getMCQByIdService,
  updateMCQService,
} from './mcqService';

export const createMCQController = catchAsync(async (req, res) => {
  const result = await createMCQService(req?.body);

  res.status(200).json({
    success: true,
    message: 'MCQ created successfully',
    data: result,
  });
});

export const getAllMCQController = catchAsync(async (req, res) => {
  const result = await getAllMCQService();
  res.status(200).json({
    success: true,
    message: 'All MCQ get successfully',
    data: result,
  });
});

export const getMCQByIdController = catchAsync(async (req, res) => {
  const result = await getMCQByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'MCQ get successfully',
    data: result,
  });
});

export const updateMCQController = catchAsync(async (req, res) => {
  const result = await updateMCQService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'MCQ updated successfully',
    data: result,
  });
});

export const deleteMCQController = catchAsync(async (req, res) => {
  const result = await deleteMCQService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'MCQ deleted successfully',
    data: result,
  });
});
