import { catchAsync } from '../../../utils/catchAsync';
import {
  createInstituteService,
  deleteInstituteService,
  getAllInstituteService,
  getInstituteByIdService,
  updateInstituteService,
} from './instituteService';

export const createInstituteController = catchAsync(async (req, res) => {
  const result = await createInstituteService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Job Institute created successfully',
    data: result,
  });
});

export const getAllInstituteController = catchAsync(async (req, res) => {
  const result = await getAllInstituteService();
  res.status(200).json({
    success: true,
    message: 'All Job Institute get successfully',
    data: result,
  });
});

export const getInstituteByIdController = catchAsync(async (req, res) => {
  const result = await getInstituteByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Job Institute get by id successfully',
    data: result,
  });
});

export const updateInstituteController = catchAsync(async (req, res) => {
  const result = await updateInstituteService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Job Institute updated successfully',
    data: result,
  });
});

export const deleteInstituteController = catchAsync(async (req, res) => {
  const result = await deleteInstituteService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Job Institute deleted successfully',
    data: result,
  });
});
