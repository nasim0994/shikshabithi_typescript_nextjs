import { catchAsync } from '../../../utils/catchAsync';
import {
  createClassService,
  deleteClassService,
  getAllClassService,
  getClassByIdService,
  updateClassService,
} from './classService';

export const createClassController = catchAsync(async (req, res) => {
  const result = await createClassService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy Class created successfully',
    data: result,
  });
});

export const getAllClassController = catchAsync(async (req, res) => {
  const result = await getAllClassService();
  res.status(200).json({
    success: true,
    message: 'All Academy Class get successfully',
    data: result,
  });
});

export const getClassByIdController = catchAsync(async (req, res) => {
  const result = await getClassByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Class get successfully',
    data: result,
  });
});

export const updateClassController = catchAsync(async (req, res) => {
  const result = await updateClassService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy Class updated successfully',
    data: result,
  });
});

export const deleteClassController = catchAsync(async (req, res) => {
  const result = await deleteClassService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Class deleted successfully',
    data: result,
  });
});
