import { makeSlug } from '../../../utils/makeSlug';
import { ICategory } from './categoryInterface';
import { Category } from './categoryModel';

export const createCategoryService = async (data: Partial<ICategory>) => {
  // Get last category by createdAt
  const lastCategory = await Category.findOne({}).sort({ createdAt: -1 });
  let uuid = 1000;
  if (lastCategory) uuid = lastCategory?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await Category.create(newData);
  return result;
};

export const getAllCategoryService = async () => {
  const result = await Category.findOne();
  return result;
};

export const getCategoryByIdService = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};

export const updateCategoryService = async (
  id: string,
  data: Partial<ICategory>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await Category.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteCategoryService = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};
