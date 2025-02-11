import { ObjectId } from 'mongoose';

export type IMcq = {
  question: string;
  options: string[];
  ans: string;
  explain: string;
  user: ObjectId;
  category: ObjectId;
  class: ObjectId;
  subject: ObjectId;
  chapter?: ObjectId;
  tags?: string[];
  sets?: ObjectId[];
  jobSets?: ObjectId[];
};
