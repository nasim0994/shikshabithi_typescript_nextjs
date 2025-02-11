import { IMcq } from './mcqInterface';
import { MCQ } from './mcqModel';

export const createMCQService = async (data: Partial<IMcq>) => {
  const result = await MCQ.create(data);
  return result;
};

export const getAllMCQService = async () => {
  const result = await MCQ.findOne();
  return result;
};

export const getMCQByIdService = async (id: string) => {
  const result = await MCQ.findById(id);
  return result;
};

export const updateMCQService = async (id: string, data: Partial<IMcq>) => {
  const result = await MCQ.findByIdAndUpdate(id, data, { new: true });
  return result;
};

export const deleteMCQService = async (id: string) => {
  const result = await MCQ.findByIdAndDelete(id);
  return result;
};
