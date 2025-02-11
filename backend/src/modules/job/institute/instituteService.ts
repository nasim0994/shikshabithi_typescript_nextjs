import { makeSlug } from '../../../utils/makeSlug';
import { IInstitute } from './instituteInterface';
import { Institute } from './instituteModel';

export const createInstituteService = async (data: Partial<IInstitute>) => {
  // Get last Institute by createdAt
  const lastInstitute = await Institute.findOne({}).sort({ createdAt: -1 });
  let uuid = 1000;
  if (lastInstitute) uuid = lastInstitute?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await Institute.create(newData);
  return result;
};

export const getAllInstituteService = async () => {
  const result = await Institute.findOne();
  return result;
};

export const getInstituteByIdService = async (id: string) => {
  const result = await Institute.findById(id);
  return result;
};

export const updateInstituteService = async (
  id: string,
  data: Partial<IInstitute>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await Institute.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteInstituteService = async (id: string) => {
  const result = await Institute.findByIdAndDelete(id);
  return result;
};
