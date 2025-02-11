import { catchAsync } from '../../../utils/catchAsync';
import {
  createSubjectService,
  deleteSubjectService,
  getAllSubjectService,
  getSubjectByIdService,
  updateSubjectService,
} from './subjectService';

export const createSubjectController = catchAsync(async (req, res) => {
  const result = await createSubjectService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy Subject created successfully',
    data: result,
  });
});

export const getAllSubjectController = catchAsync(async (req, res) => {
  const result = await getAllSubjectService();
  res.status(200).json({
    success: true,
    message: 'All Academy Subject get successfully',
    data: result,
  });
});

export const getSubjectByIdController = catchAsync(async (req, res) => {
  const result = await getSubjectByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Subject get successfully',
    data: result,
  });
});

export const updateSubjectController = catchAsync(async (req, res) => {
  const result = await updateSubjectService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy Subject updated successfully',
    data: result,
  });
});

export const deleteSubjectController = catchAsync(async (req, res) => {
  const result = await deleteSubjectService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Subject deleted successfully',
    data: result,
  });
});
