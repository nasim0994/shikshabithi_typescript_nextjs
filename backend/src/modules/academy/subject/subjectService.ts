import { makeSlug } from '../../../utils/makeSlug';
import { ISubject } from './subjectInterface';
import { Subject } from './subjectModel';

export const createSubjectService = async (data: Partial<ISubject>) => {
  // Get last category by createdAt
  const lastSubject = await Subject.findOne({}).sort({ createdAt: -1 });
  let uuid = 3000;
  if (lastSubject) uuid = lastSubject?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await Subject.create(newData);
  return result;
};

export const getAllSubjectService = async () => {
  const result = await Subject.findOne();
  return result;
};

export const getSubjectByIdService = async (id: string) => {
  const result = await Subject.findById(id);
  return result;
};

export const updateSubjectService = async (
  id: string,
  data: Partial<ISubject>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await Subject.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteSubjectService = async (id: string) => {
  const result = await Subject.findByIdAndDelete(id);
  return result;
};
