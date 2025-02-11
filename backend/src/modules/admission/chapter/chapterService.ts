import { makeSlug } from '../../../utils/makeSlug';
import { IChapter } from './chapterInterface';
import { Chapter } from './chapterModel';

export const createChapterService = async (data: Partial<IChapter>) => {
  // Get last category by createdAt
  const lastChapter = await Chapter.findOne({}).sort({ createdAt: -1 });
  let uuid = 5000;
  if (lastChapter) uuid = lastChapter?.uuid + 1;

  const newData = {
    ...data,
    uuid,
    slug: makeSlug(data?.name as string),
  };

  const result = await Chapter.create(newData);
  return result;
};

export const getAllChapterService = async () => {
  const result = await Chapter.findOne();
  return result;
};

export const getChapterByIdService = async (id: string) => {
  const result = await Chapter.findById(id);
  return result;
};

export const updateChapterService = async (
  id: string,
  data: Partial<IChapter>,
) => {
  const newData = {
    ...data,
    slug: makeSlug(data?.name as string),
  };
  const result = await Chapter.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const deleteChapterService = async (id: string) => {
  const result = await Chapter.findByIdAndDelete(id);
  return result;
};
