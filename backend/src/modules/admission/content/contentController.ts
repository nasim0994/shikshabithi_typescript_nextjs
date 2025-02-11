import { catchAsync } from '../../../utils/catchAsync';
import {
  createContentService,
  deleteContentService,
  getAllContentService,
  getContentByIdService,
  updateContentService,
} from './contentService';

export const createContentController = catchAsync(async (req, res) => {
  const result = await createContentService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy Content created successfully',
    data: result,
  });
});

export const getAllContentController = catchAsync(async (req, res) => {
  const result = await getAllContentService();
  res.status(200).json({
    success: true,
    message: 'All Academy Content get successfully',
    data: result,
  });
});

export const getContentByIdController = catchAsync(async (req, res) => {
  const result = await getContentByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Content get successfully',
    data: result,
  });
});

export const updateContentController = catchAsync(async (req, res) => {
  const result = await updateContentService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy Content updated successfully',
    data: result,
  });
});

export const deleteContentController = catchAsync(async (req, res) => {
  const result = await deleteContentService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Content deleted successfully',
    data: result,
  });
});
