import { makeSlug } from '../../../utils/makeSlug';
import { IUniversity } from './universityInterface';
import { University } from './universityModel';

export const createUniversityService = async (data: Partial<IUniversity>) => {
  // Get last University by createdAt
  const lastUniversity = await University.findOne({}).sort({ createdAt: -1 });
  let uuid = 1000;
  if (lastUniversity) uuid = lastUniversity?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await University.create(newData);
  return result;
};

export const getAllUniversityService = async () => {
  const result = await University.findOne();
  return result;
};

export const getUniversityByIdService = async (id: string) => {
  const result = await University.findById(id);
  return result;
};

export const updateUniversityService = async (
  id: string,
  data: Partial<IUniversity>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await University.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteUniversityService = async (id: string) => {
  const result = await University.findByIdAndDelete(id);
  return result;
};
