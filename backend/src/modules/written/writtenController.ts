import { catchAsync } from '../../utils/catchAsync';
import {
  createWrittenService,
  deleteWrittenService,
  getAllWrittenService,
  getWrittenByIdService,
  updateWrittenService,
} from './writtenService';

export const createWrittenController = catchAsync(async (req, res) => {
  const result = await createWrittenService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Written created successfully',
    data: result,
  });
});

export const getAllWrittenController = catchAsync(async (req, res) => {
  const result = await getAllWrittenService();
  res.status(200).json({
    success: true,
    message: 'All Written get successfully',
    data: result,
  });
});

export const getWrittenByIdController = catchAsync(async (req, res) => {
  const result = await getWrittenByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Written get successfully',
    data: result,
  });
});

export const updateWrittenController = catchAsync(async (req, res) => {
  const result = await updateWrittenService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Written updated successfully',
    data: result,
  });
});

export const deleteWrittenController = catchAsync(async (req, res) => {
  const result = await deleteWrittenService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Written deleted successfully',
    data: result,
  });
});
