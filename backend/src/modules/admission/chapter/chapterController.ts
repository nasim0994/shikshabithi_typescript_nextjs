import { catchAsync } from '../../../utils/catchAsync';
import {
  createChapterService,
  deleteChapterService,
  getAllChapterService,
  getChapterByIdService,
  updateChapterService,
} from './chapterService';

export const createChapterController = catchAsync(async (req, res) => {
  const result = await createChapterService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy Chapter created successfully',
    data: result,
  });
});

export const getAllChapterController = catchAsync(async (req, res) => {
  const result = await getAllChapterService();
  res.status(200).json({
    success: true,
    message: 'All Academy Chapter get successfully',
    data: result,
  });
});

export const getChapterByIdController = catchAsync(async (req, res) => {
  const result = await getChapterByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Chapter get successfully',
    data: result,
  });
});

export const updateChapterController = catchAsync(async (req, res) => {
  const result = await updateChapterService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy Chapter updated successfully',
    data: result,
  });
});

export const deleteChapterController = catchAsync(async (req, res) => {
  const result = await deleteChapterService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Chapter deleted successfully',
    data: result,
  });
});
