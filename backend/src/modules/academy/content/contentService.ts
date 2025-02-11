import { IContent } from './contentInterface';
import { Content } from './contentModel';

export const createContentService = async (data: IContent) => {
  const result = await Content.create(data);
  return result;
};

export const getAllContentService = async () => {
  const result = await Content.findOne();
  return result;
};

export const getContentByIdService = async (id: string) => {
  const result = await Content.findById(id);
  return result;
};

export const updateContentService = async (
  id: string,
  data: Partial<IContent>,
) => {
  const result = await Content.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteContentService = async (id: string) => {
  const result = await Content.findByIdAndDelete(id);
  return result;
};
