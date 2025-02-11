import { catchAsync } from '../../../utils/catchAsync';
import {
  createJobMCQService,
  deleteJobMCQService,
  getAllJobMCQService,
  getJobMCQByIdService,
  updateJobMCQService,
} from './jobMCQService';

export const createJobMCQController = catchAsync(async (req, res) => {
  const result = await createJobMCQService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Job MCQ created successfully',
    data: result,
  });
});

export const getAllJobMCQController = catchAsync(async (req, res) => {
  const result = await getAllJobMCQService();
  res.status(200).json({
    success: true,
    message: 'All Job MCQ get successfully',
    data: result,
  });
});

export const getJobMCQByIdController = catchAsync(async (req, res) => {
  const result = await getJobMCQByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Job MCQ get successfully',
    data: result,
  });
});

export const updateJobMCQController = catchAsync(async (req, res) => {
  const result = await updateJobMCQService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Job MCQ updated successfully',
    data: result,
  });
});

export const deleteJobMCQController = catchAsync(async (req, res) => {
  const result = await deleteJobMCQService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Job MCQ deleted successfully',
    data: result,
  });
});
