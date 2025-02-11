import { makeSlug } from '../../../utils/makeSlug';
import { IQuestionSet } from './questionSetInterface';
import { QuestionSet } from './questionSetModel';

export const createQuestionSetService = async (data: Partial<IQuestionSet>) => {
  // Get last category by createdAt
  const lastQuestionSet = await QuestionSet.findOne({}).sort({ createdAt: -1 });
  let uuid = 2000;
  if (lastQuestionSet) uuid = lastQuestionSet?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await QuestionSet.create(newData);
  return result;
};

export const getAllQuestionSetService = async () => {
  const result = await QuestionSet.findOne();
  return result;
};

export const getQuestionSetByIdService = async (id: string) => {
  const result = await QuestionSet.findById(id);
  return result;
};

export const updateQuestionSetService = async (
  id: string,
  data: Partial<IQuestionSet>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await QuestionSet.findByIdAndUpdate(id, newData, {
    new: true,
  });
  return result;
};

export const deleteQuestionSetService = async (id: string) => {
  const result = await QuestionSet.findByIdAndDelete(id);
  return result;
};
