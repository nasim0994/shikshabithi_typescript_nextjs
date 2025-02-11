import { catchAsync } from '../../../utils/catchAsync';
import {
  createUniversityService,
  deleteUniversityService,
  getAllUniversityService,
  getUniversityByIdService,
  updateUniversityService,
} from './universityService';

export const createUniversityController = catchAsync(async (req, res) => {
  const result = await createUniversityService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Admission University created successfully',
    data: result,
  });
});

export const getAllUniversityController = catchAsync(async (req, res) => {
  const result = await getAllUniversityService();
  res.status(200).json({
    success: true,
    message: 'All Admission University get successfully',
    data: result,
  });
});

export const getUniversityByIdController = catchAsync(async (req, res) => {
  const result = await getUniversityByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Admission University get by id successfully',
    data: result,
  });
});

export const updateUniversityController = catchAsync(async (req, res) => {
  const result = await updateUniversityService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Admission University updated successfully',
    data: result,
  });
});

export const deleteUniversityController = catchAsync(async (req, res) => {
  const result = await deleteUniversityService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Admission University deleted successfully',
    data: result,
  });
});
