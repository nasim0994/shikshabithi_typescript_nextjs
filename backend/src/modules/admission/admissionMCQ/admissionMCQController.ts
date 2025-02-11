import { catchAsync } from '../../../utils/catchAsync';
import {
  createAdmissionMCQService,
  deleteAdmissionMCQService,
  getAllAdmissionMCQService,
  getAdmissionMCQByIdService,
  updateAdmissionMCQService,
} from './admissionMCQService';

export const createAdmissionMCQController = catchAsync(async (req, res) => {
  const result = await createAdmissionMCQService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy AdmissionMCQ created successfully',
    data: result,
  });
});

export const getAllAdmissionMCQController = catchAsync(async (req, res) => {
  const result = await getAllAdmissionMCQService();
  res.status(200).json({
    success: true,
    message: 'All Academy AdmissionMCQ get successfully',
    data: result,
  });
});

export const getAdmissionMCQByIdController = catchAsync(async (req, res) => {
  const result = await getAdmissionMCQByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy AdmissionMCQ get successfully',
    data: result,
  });
});

export const updateAdmissionMCQController = catchAsync(async (req, res) => {
  const result = await updateAdmissionMCQService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy AdmissionMCQ updated successfully',
    data: result,
  });
});

export const deleteAdmissionMCQController = catchAsync(async (req, res) => {
  const result = await deleteAdmissionMCQService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy AdmissionMCQ deleted successfully',
    data: result,
  });
});
