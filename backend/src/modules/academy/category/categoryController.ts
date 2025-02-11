import { catchAsync } from '../../../utils/catchAsync';
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  getCategoryByIdService,
  updateCategoryService,
} from './categoryService';

export const createCategoryController = catchAsync(async (req, res) => {
  const result = await createCategoryService(req?.body);

  res.status(200).json({
    success: true,
    message: 'Academy Category created successfully',
    data: result,
  });
});

export const getAllCategoryController = catchAsync(async (req, res) => {
  const result = await getAllCategoryService();
  res.status(200).json({
    success: true,
    message: 'All Academy Category get successfully',
    data: result,
  });
});

export const getCategoryByIdController = catchAsync(async (req, res) => {
  const result = await getCategoryByIdService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Category get by id successfully',
    data: result,
  });
});

export const updateCategoryController = catchAsync(async (req, res) => {
  const result = await updateCategoryService(req?.params?.id, req?.body);
  res.status(200).json({
    success: true,
    message: 'Academy Category updated successfully',
    data: result,
  });
});

export const deleteCategoryController = catchAsync(async (req, res) => {
  const result = await deleteCategoryService(req?.params?.id);
  res.status(200).json({
    success: true,
    message: 'Academy Category deleted successfully',
    data: result,
  });
});
