import { IJobMCQ } from './jobMCQInterface';
import { JobMCQ } from './jobMCQModel';

export const createJobMCQService = async (data: Partial<IJobMCQ>) => {
  const result = await JobMCQ.create(data);
  return result;
};

export const getAllJobMCQService = async () => {
  const result = await JobMCQ.findOne();
  return result;
};

export const getJobMCQByIdService = async (id: string) => {
  const result = await JobMCQ.findById(id);
  return result;
};

export const updateJobMCQService = async (
  id: string,
  data: Partial<IJobMCQ>,
) => {
  const result = await JobMCQ.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const deleteJobMCQService = async (id: string) => {
  const result = await JobMCQ.findByIdAndDelete(id);
  return result;
};
