import { IAdmissionMCQ } from './admissionMCQInterface';
import { AdmissionMCQ } from './admissionMCQModel';

export const createAdmissionMCQService = async (
  data: Partial<IAdmissionMCQ>,
) => {
  const result = await AdmissionMCQ.create(data);
  return result;
};

export const getAllAdmissionMCQService = async () => {
  const result = await AdmissionMCQ.findOne();
  return result;
};

export const getAdmissionMCQByIdService = async (id: string) => {
  const result = await AdmissionMCQ.findById(id);
  return result;
};

export const updateAdmissionMCQService = async (
  id: string,
  data: Partial<IAdmissionMCQ>,
) => {
  const result = await AdmissionMCQ.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const deleteAdmissionMCQService = async (id: string) => {
  const result = await AdmissionMCQ.findByIdAndDelete(id);
  return result;
};
