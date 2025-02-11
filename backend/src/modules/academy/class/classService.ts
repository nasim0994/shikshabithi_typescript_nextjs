import { makeSlug } from '../../../utils/makeSlug';
import { IClass } from './classInterface';
import { Class } from './classModel';

export const createClassService = async (data: Partial<IClass>) => {
  // Get last category by createdAt
  const lastClass = await Class.findOne({}).sort({ createdAt: -1 });
  let uuid = 2000;
  if (lastClass) uuid = lastClass?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await Class.create(newData);
  return result;
};

export const getAllClassService = async () => {
  const result = await Class.findOne();
  return result;
};

export const getClassByIdService = async (id: string) => {
  const result = await Class.findById(id);
  return result;
};

export const updateClassService = async (id: string, data: Partial<IClass>) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await Class.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteClassService = async (id: string) => {
  const result = await Class.findByIdAndDelete(id);
  return result;
};
