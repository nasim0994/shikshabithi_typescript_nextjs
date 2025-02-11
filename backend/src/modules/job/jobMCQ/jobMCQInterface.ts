import { ObjectId } from 'mongoose';

export type ISubject = {
  subject: ObjectId;
  questions: ObjectId[];
};

export type IJobMCQ = {
  institute: ObjectId;
  questionSet: ObjectId;
  subjects: ISubject[];
};
