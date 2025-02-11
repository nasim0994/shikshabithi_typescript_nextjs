import { ObjectId } from 'mongoose';

export type ISubject = {
  subject: ObjectId;
  questions: ObjectId[];
};

export type IAdmissionMCQ = {
  university: ObjectId;
  questionSet: ObjectId;
  subjects: ISubject[];
};
