import { IWritten } from './writtenInterface';
import { Written } from './writtenModel';

export const createWrittenService = async (data: Partial<IWritten>) => {
  const result = await Written.create(data);
  return result;
};

export const getAllWrittenService = async () => {
  const result = await Written.findOne();
  return result;
};

export const getWrittenByIdService = async (id: string) => {
  const result = await Written.findById(id);
  return result;
};

export const updateWrittenService = async (
  id: string,
  data: Partial<IWritten>,
) => {
  const result = await Written.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteWrittenService = async (id: string) => {
  const result = await Written.findByIdAndDelete(id);
  return result;
};
