import { makeSlug } from '../../../utils/makeSlug';
import { IJobQuestionSet } from './questionSetInterface';
import { JobQuestionSet } from './questionSetModel';

export const createQuestionSetService = async (
  data: Partial<IJobQuestionSet>,
) => {
  // Get last category by createdAt
  const lastQuestionSet = await JobQuestionSet.findOne({}).sort({
    createdAt: -1,
  });
  let uuid = 2000;
  if (lastQuestionSet) uuid = lastQuestionSet?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await JobQuestionSet.create(newData);
  return result;
};

export const getAllQuestionSetService = async () => {
  const result = await JobQuestionSet.findOne();
  return result;
};

export const getQuestionSetByIdService = async (id: string) => {
  const result = await JobQuestionSet.findById(id);
  return result;
};

export const updateQuestionSetService = async (
  id: string,
  data: Partial<IJobQuestionSet>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await JobQuestionSet.findByIdAndUpdate(id, newData, {
    new: true,
  });
  return result;
};

export const deleteQuestionSetService = async (id: string) => {
  const result = await JobQuestionSet.findByIdAndDelete(id);
  return result;
};
